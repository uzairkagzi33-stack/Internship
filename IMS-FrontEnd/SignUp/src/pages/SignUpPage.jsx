import { useState } from "react";
import SignUpCard from "../components/signup/SignUpCard";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/signup/SignUpForm";
//error done
// SignUpPage is now lean — no layout concerns, just state + card + form
export default function SignUpPage() {
  const [fullName,   setFullName]   = useState("");
  const [department, setDepartment] = useState("");
  const [role,       setRole]       = useState(null);
  const [error, setError] =useState("")
  const navigate = useNavigate()
//Error showing Done.
  const handleNext = () => {
    if (!fullName || !department || !role) {
      setError("EnterFull Creds")
      return;
    }
    alert(`Proceeding as ${role}: ${fullName} from ${department}`);
    navigate("/signup2")
  };

  return (
    <SignUpCard
      title="Create a new account"
      subtitle="Enter your details to Sign up."
      // width={437}
      // minHeight={578}
      styles = 'w-93.25 min-h-144.5'
    >
      <SignUpForm
        fullName={fullName}       setFullName={setFullName}
        department={department}   setDepartment={setDepartment}
        role={role}               setRole={setRole}
        onNext={handleNext}
        buttonLabel="Next"
        footerText="Already have an account?"
        footerLinkText="Login"
        footerLinkTo="/login"
        error={error}
      />
    </SignUpCard>
  );
} 