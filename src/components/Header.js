import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((store)=>store.user)
  const signOutUser = () => {
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44 "
        src={ LOGO}
        alt="logo"></img>
      {
        userInfo && 
        <div>
        <button  className="font-bold text-white"onClick={() => {
          signOutUser()
        }}> Sign Out</button>
      </div>
      }
      
    </div>
  );
};

export default Header;
