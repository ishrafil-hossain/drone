import initializeAuthentication from '../Components/LoginPage/Firebase/firebase.init';
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import swal from "sweetalert";

initializeAuthentication();
//auth provider
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    //Create New USer
    const createNewUser = (name, email, password, navigate) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // update name 
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });
                navigate('/');
                swal("Good job!", "You successfully Registered!", "success");
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    //Google SIgn In
    const signInWithGoogle = (location, navigate) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                swal("Good job!", "You successfully Login!", "success");
                const user = result.user;
                saveUser(user.email, user.name, 'PUT')
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //Sign In With Email & Password
    const signInWithEmailPassword = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                swal("Good job!", "You successfully Login!", "success");
                setUser(result.user);
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //PassWord Reset
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                swal("Good job!", "Password Reset Email Sent To Your Mail!", "success");
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    //logOut
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {

        })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            });
    }

    //save user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

    }

    //Set Admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // observe user 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false);
        });
        return unsubscribed;
    }, [auth]);

    return { user, loading, error, admin, signInWithGoogle, signInWithEmailPassword, createNewUser, resetPassword, logOut }

}
export default useFirebase;