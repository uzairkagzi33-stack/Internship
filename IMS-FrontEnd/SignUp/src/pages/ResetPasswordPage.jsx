import { useState } from "react";
import SignUpCard from "../components/signup/SignUpCard";
import SignUpForm, { Back, Button, PasswordField } from "../components/signup/SignUpForm";
import { EmailPassword } from "../components/signup/SignUpForm";
import PasswordIcon from "../components/icons/PasswordIcon";

// SignUpPage is now lean — no layout concerns, just state + card + form
export default function SignUpPage() {
//   const [email,   setEmail]         =    useState("");
  const [password1, setPassword1]   =    useState("");
  const [password2, setPassword2]   =    useState(""); 

  const handleNext = () => {
    // if (!email || !password1 || !password2) return;
    // if (password1 !== password2) {
    //   alert("Passwords do not match!");
    //   return;
    // }
    // alert(`Proceeding to register: ${email}`);
     
  };

  return (
    <SignUpCard
      title="Register for System Access"
      subtitle="Enter your details to Sign up."
      width={440}
      minHeight={550}
    >

    <PasswordField
    id="password1"
    label="New Password"
    value={password1}
    onChange={e=>setPassword1(e.target.value)}
    />
    <PasswordField
    id="password2"
    label="Retype Password"
    value={password2}
    onChange={e=>setPassword2(e.target.value)}
    />
    <Button 
        onNext = {handleNext}
        buttonLabel = {"Reset Password"}
    />
        <Back 
        footerText="Back"
        footerLinkTo="/signup"
        backArrow="true"
        align="left"
        />
    </SignUpCard>
  );
} 