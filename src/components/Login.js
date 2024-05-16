import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true)
    const toggleForm =()=>{
        setIsSignInForm(!isSignInForm)
    }
    return (<div>
        <Header></Header>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
        </div>
        <form className="w-1/4 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="text-3xl font-bold py-4"> {isSignInForm ? "Sign In" : "Sign UP"}</h1>
            { !isSignInForm && <input type="text"  placeholder="User Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>}
            
            <input type="text"  placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg"></input>
            <button className="bg-red-700 w-full p-4 my-4 rounded-lg"> Sign In</button>
            <p className="py-4 cursor-pointer" onClick={() => toggleForm()}>{ isSignInForm ? 'New to Netflix ? SignUp Now' : 'Already Registered? Sign In' }</p>
        </form>
    </div>)
}

export default Login;