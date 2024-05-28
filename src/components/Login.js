import { useRef, useState } from "react";
import Header from "./Header";
import FormValidate from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMAGE } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const [errorMessage, setErrorMessage] = useState(null);
  const handleFormSubmit = () => {
    const message = FormValidate(
      username?.current?.value,
      email.current.value,
      password.current.value,
      isSignInForm
    );
    setErrorMessage(message);
    if (errorMessage) return;

    if (isSignInForm) {
      // sign IN
      signInWithEmailAndPassword(auth ,  email.current.value,
        password.current.value)
        .then((userCredential) => {
          const user = userCredential.user
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+  "-" + errorMessage)
        })
    } else {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+  "-" + errorMessage)
        });
    }
  };
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src={ BACKGROUND_IMAGE}></img>
      </div>
      <form
        onSubmit={e => e.preventDefault()}
        className="w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            ref={username}
            type="text"
            placeholder="User Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button
          className="bg-red-700 w-full p-4 my-4 rounded-lg"
          onClick={() => handleFormSubmit()}>
          {isSignInForm ? "Sign In " : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={() => toggleForm()}>
          {isSignInForm
            ? "New to Netflix ? SignUp Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
