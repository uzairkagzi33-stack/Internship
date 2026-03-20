import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, LockKeyhole  } from "lucide-react";
import SignUpCard          from "../components/signup/SignUpCard";
import { InputField, Footer, Button}      from "../components/signup/SignUpForm";
import ForgetPassword from "../components/login/ForgetPassword";
//Error showing done
export default function LoginPage() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {

      setError('Enter valid credentials');
      return;
    }
    
    navigate("/dashboard");
  };
  // const cardStyles = {
  //   minHeight:552, width:540
  // }

  return (

    <SignUpCard
      title="Login to your account"
      subtitle="Enter your detail to login."
      styles='min-h-105'
      // className ='min-h-105'
      // minHeight={420}
    >
      <form
        className="flex flex-col w-93.25 gap-3 h-33.5"
        style={{ width: 373, gap: 12, height:134 }}
        onSubmit={e => { e.preventDefault(); handleLogin(); }}
      >
        <InputField
          id="email"
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          icon={Mail}
          error = {error}
        />
        <InputField
          id="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          icon={LockKeyhole}
        />
      </form>
      <ForgetPassword
        linkTo = '/forget-password'
        linkText ='Forgot password?'
      />

    <Button buttonLabel="Login" onNext={handleLogin}/>
      {/* <button
        type="button"
        onClick={handleLogin}
        className="rounded-lg bg-blue-600 w-93.25 h-10.5 text-[15px] text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors"
      >
        Login
      </button> */}
      <Footer
        footerText={"Don't have an account? "}
        footerLinkTo={"/signup"}
        footerLinkText={"Sign up now"}
      />
      
    </SignUpCard>
  );
}