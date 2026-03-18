import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpCard from "../components/signup/SignUpCard";
import OtpInput from "../components/signup/OtpInput.jsx";
import VerifyEmailLogo from "../components/icons/VerifyEmailLogo";
import { Back, Footer } from "../components/signup/SignUpForm";

function VerifyOTPpage() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp.length < 4) {
      alert("Please enter full 4-digit OTP");
      return;
    }
    console.log("OTP submitted:", otp);
    // TODO: Verify OTP with backend
    alert("OTP verified! Redirecting...");
    navigate("/login");
  };

  return (
    <SignUpCard 
    title="Email verification Code"
    subtitle="We’ve sent a code at user@mail.com"
    icon={<VerifyEmailLogo />}
    showDivider
    minHeight={474}
    width={440}
    >

      <OtpInput value={otp} onChange={setOtp} />

      <button
        onClick={handleVerify}
        className="mt-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        style={{ width: 373, height: 42, fontSize: 15 }}
      >
        Submit Code
      </button>

    <Footer footerText={"Experiencing issues receiving the code?"} />

      <Back 
        footerText="Resend"
        footerLinkTo="/forget-password"
        align = "center"
        backArrow="false"
      />

    </SignUpCard>
  );
}

export default VerifyOTPpage;
