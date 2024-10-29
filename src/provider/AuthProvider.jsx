import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const MySwal = withReactContent(Swal);

    // register user
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logout user
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    //state changed
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if(user){
                const creationTime = new Date(user.metadata?.creationTime);
                const lastSingInTime = new Date(user.metadata?.lastSignInTime);
                if(creationTime.getTime() !== lastSingInTime.getTime()){
                    setUser(user);
                    setLoading(false);
                }
            }
        });

        return () => {
            unSubscribe();
        };

    }, []);

    const authInfo = {MySwal, user, loading, registerUser, loginUser, logoutUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;