import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LOGO ,SUPPORTED_LANGUAGES} from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const userInfo = useSelector(store => store.user);
  const isGPTSearchClicked = useSelector(store=>store.gpt.isGPTSearchClicked)
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  };

  const dispatch = useDispatch();

  const handleGPTSearchViewClick = () => {
    dispatch(toggleGPTSearchView());
  };

  return (
    <div className="relative w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between bg-black sm:bg-blue-900 md:bg-green-700">
      <img className="w-44 " src={LOGO} alt="logo"></img>
      {userInfo && (
        <div>
          {
            isGPTSearchClicked &&    <select className="mr-10" onChange={(event) => dispatch(setLanguage(event.target.value))}>
            {
              SUPPORTED_LANGUAGES.map((data, index) => <option key={index} value={data.value}>{data.label}</option>)
            }
          </select>
          }
       
          <button
            className="text-white rounded-lg mr-8 bg-purple-800 px-4 py-2 cursor-pointer"
            onClick={handleGPTSearchViewClick}>
            {isGPTSearchClicked ? "Home Page" :"GPT Search"}
          </button>
          <button
            className="font-bold text-white cursor-pointer"
            onClick={() => {
              signOutUser();
            }}>
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
