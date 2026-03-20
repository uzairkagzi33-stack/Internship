import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import SignUpCard          from "../components/signup/SignUpCard";
import { InputField,Back, Button }      from "../components/signup/SignUpForm";
import { useState } from "react";
import PasswordIcon from "../components/icons/PasswordIcon";
import { UseEmail } from "../components/contexts/EmailContext";

export default function ForgetPasswordPage() {
//Error Showing Done
  const [localEmail,    setLocalEmail]    = useState("");
  const navigate = useNavigate();
  const { setEmail } = UseEmail();
  const [error, setError ] =useState('')

  const handleLogin = () => {
    if (!localEmail.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    setEmail(localEmail); 
    //
    navigate("/verify-otp")
  };
  const cardStyles = {  minHeight:468 , width:440}
  
  return (
    <SignUpCard
      title="Forget Password?"
      subtitle="Enter your email to reset your password."
      icon={<PasswordIcon />}
      styles={cardStyles}
    >
      <form
        className="flex flex-col"
        style={{ width: 376, gap: 12, height:68 }}
        onSubmit={e => { e.preventDefault(); handleLogin(); }}
      >
        <InputField
          id="passwordReset"
          error= {error}
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          value={localEmail}
          onChange={e => setLocalEmail(e.target.value)}
          icon={Mail}
        />
      </form>
      {/* <ForgetPassword /> */}
      <Button onNext={handleLogin} buttonLabel="Send OTP"/>
      
          <Back footerText="Back" footerLinkTo="/login" />
    </SignUpCard>
  );
}