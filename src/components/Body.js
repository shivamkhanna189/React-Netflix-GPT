
import { Outlet, useNavigate } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { setUserInfo ,removeUserInfo} from "../utils/userSlice"

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // sign in or signup
                const {uid , email , displayName} = user
                dispatch(setUserInfo({ uid, email, displayName }))
                navigate("/browse")
            } else {
                // signed out
                dispatch(removeUserInfo(null))
                navigate("/");
            }
        })

        // unsubscribing auth state change
        return () => unsubscribe();
    },[]) 


    return (<div>       
            <Outlet></Outlet>
    </div>)
}

export default Body; 
