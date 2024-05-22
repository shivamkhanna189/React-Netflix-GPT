
const FormValidate = (username ,email, password , isSignInForm) => {
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isSignInForm && username.length <5) return "Minimum 5 characters for username"
    if (!emailValid) return "Email is Invalid";
    if (!passwordValid) return "Password is Invalid"
    
    return null;
}

export default FormValidate;