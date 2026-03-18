import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpCard from "../components/signup/SignUpCard";
import OtpInput from "../components/signup/OtpInput.jsx";
import VerifyEmailLogo from "../components/icons/VerifyEmailLogo";
import { Back, Footer } from "../components/signup/SignUpForm";
import { UseEmail } from "../components/contexts/EmailContext";

function VerifyOTPpage() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const { email, clearEmail } = UseEmail();
  const [error, setError] = useState("")

  const handleVerify = () => {
    if (otp.length < 4) {
      // alert("Please enter full 4-digit OTP");
      setError("Please enter full 4-digit OTP")
      return;
    }
    console.log("OTP submitted:", otp);
    // TODO: Verify OTP with backend
    alert("OTP verified! Redirecting...");
    clearEmail()
    navigate("/login");
  };

  return (
    <SignUpCard 
    title="Email verification Code"
          subtitle={
        // Show the actual email from context right in the subtitle
        <>
          We sent a 4-digit code to{" "}
          <span className="font-medium text-gray-900">{email}</span>
        </>
      }
    icon={<VerifyEmailLogo />}
    showDivider
    minHeight={474}
    width={440}
    >

      <OtpInput value={otp} onChange={setOtp} error={error}/>

      <button
        onClick={handleVerify}
        className="rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
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
