import { useState } from "react";
import SignUpCard from "../components/signup/SignUpCard";
import SignUpForm, { Back } from "../components/signup/SignUpForm";
import { EmailPassword } from "../components/signup/SignUpForm";
import PasswordIcon from "../components/icons/PasswordIcon";

// SignUpPage is now lean — no layout concerns, just state + card + form
export default function SignUpPage() {
  const [email,   setEmail]         =    useState("");
  const [password1, setPassword1]   =    useState("");
  const [password2, setPassword2]   =    useState(""); 

  const handleNext = () => {
    if (!email || !password1 || !password2) return;
    if (password1 !== password2) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Proceeding to register: ${email}`); 
  };

  return (
    <SignUpCard
      title="Register for System Access"
      subtitle="Enter your details to Sign up."
    >
      {/* <SignUpForm
        fullName={fullName}       setFullName={setFullName}
        department={department}   setDepartment={setDepartment}
        role={role}               setRole={setRole}
        onNext={handleNext}
        buttonLabel="Next"
        footerText="Already have an account?"
        footerLinkText="Login"
        footerLinkTo="/login"
      /> */}
        <EmailPassword
            email={email} setEmail={setEmail}
            password1={password1} setPassword1={setPassword1}
            password2={password2} setPassword2={setPassword2}
            onSubmit={handleNext}
            buttonLabel="Register"
            footerText="Back"
              footerLinkTo="/signup"
        />
        {/* <Back 
        footerText="Back"
        footerLinkTo="/signup"
        /> */}
    </SignUpCard>
  );
} 