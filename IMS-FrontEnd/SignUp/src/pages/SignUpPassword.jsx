import { useState } from "react";
import SignUpCard from "../components/signup/SignUpCard";
import { Mail } from "lucide-react";
import { InputField, PasswordField } from "../components/signup/SignUpForm";
import  { Back } from "../components/signup/SignUpForm";
import { useNavigate } from "react-router-dom";
//error  done
// SignUpPage is now lean — no layout concerns, just state + card + form
export default function SignUpPage() {
const [email,   setEmail]         =    useState("");
  const [password1, setPassword1]   =    useState("");
  const [password2, setPassword2]   =    useState(""); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (!email || !password1 || !password2) {
      setError("Enter all credentials.");
      return;
    };
    
    if (password1 !== password2) {
      setError("Passwords do not match!");
      return;
    }

    setError('');
    navigate("/login")
    // Proceed with registration logic here
  };

  return (
    <SignUpCard
      title="Register for System Access"
      subtitle="Enter your details to Sign up."
      width={437}
      minHeight={610}
    >
    <div className="flex flex-col" style={{ width: 373, minHeight: 210, gap: 24 }}>
        <form
    className="flex flex-col"
        style={{ width: 373, gap: 12 }}
        onSubmit = {e => { e.preventDefault();  }}>
        {/* { id, label, placeholder, value, onChange, icon: Icon, type = "text" } */}

        <InputField 
        id='email'
        label='Email'
        placeholder="Enter your email"
        value={email}
        onChange={e=> {setEmail(e.target.value); if (error) setError('');}}
        icon={Mail}
        type="email"
          error={error}
        />
        <PasswordField 
        value={password1}
        
        onChange={e=> setPassword1(e.target.value)}
        />
        
        <PasswordField 
        id="ConfirmPassword"
        label="Confirm Password"
        value={password2}
        onChange={e=> setPassword2(e.target.value)}
        />
    </form>
   

     <button
        type="button"
        onClick={handleNext}
        className="rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors cursor-pointer"
        style={{ width: 373, minHeight: 42, fontSize: 15 }}
      >
        Register
      </button>
      <Back footerText={"back"} footerLinkTo={"/signup"}  align={"left"} backArrow={"true"}/>

   
    </div>
  
        
    </SignUpCard>
  );
} 