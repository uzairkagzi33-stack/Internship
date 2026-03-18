import { useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import SignUpCard          from "../components/signup/SignUpCard";
import { InputField,Back }      from "../components/signup/SignUpForm";
// import ForgetPassword from "../components/login/ForgetPassword";
import { useState } from "react";
import PasswordIcon from "../components/icons/PasswordIcon";

export default function ForgetPasswordPage() {
  const [email,    setEmail]    = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
//
navigate("/verify-otp")
  };

  return (
    <SignUpCard
      title="Forget Password?"
      subtitle="Enter your email to reset your password."
      icon={<PasswordIcon />}
      minHeight={440}   
      width={468}
    >
      <form
        className="flex flex-col"
        style={{ width: 373, gap: 12 }}
        onSubmit={e => { e.preventDefault(); handleLogin(); }}
      >
        <InputField
          id="passwordReset"
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          icon={Mail}
        />
      </form>
      {/* <ForgetPassword /> */}

      <button
        type="button"
        onClick={handleLogin}
        className="mt-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors"
        style={{ width: 373, height: 42, fontSize: 15 }}
      >
        Send OTP
      </button>
          <Back footerText="Back" footerLinkTo="/login" />
    </SignUpCard>
  );
}