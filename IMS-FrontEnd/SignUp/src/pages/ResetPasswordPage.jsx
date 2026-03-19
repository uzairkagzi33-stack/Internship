import { useState } from "react";
import SignUpCard from "../components/signup/SignUpCard";
import  { Back, Button, PasswordField } from "../components/signup/SignUpForm";
//Error  done
export default function SignUpPage() {
  // const [localEmail,   setLocalEmail]         =    useState("");
  
  const [password1, setPassword1]   =    useState("");
  const [password2, setPassword2]   =    useState("");
  const [error, setError] = useState('') 

  const handleNext = () => {
    if (!password1 || !password2) {
      setError("Please enter both passwords");
      return;
    }
    if (password1 !== password2) {
      setError("Passwords do not match!");
      return;
    }
    setError('');
    // Proceed...
  };

  return (
    <SignUpCard
      title="Register for System Access"
      subtitle="Enter your details to Sign up."
      width={440}
      minHeight={540}
    >
<div
style={{minHeight:140, gap:12}}
>

    <PasswordField
    id="password1"
    label="New Password"
    value={password1}
    onChange={e=>setPassword1(e.target.value)}
    error={error}
    />
    <PasswordField
    id="password2"
    label="Retype Password"
    value={password2}
    onChange={e=>setPassword2(e.target.value)}
    />
</div>
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