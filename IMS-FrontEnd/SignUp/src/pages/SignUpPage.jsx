import { useState } from "react";
import SignUpCard from "../components/signup/SignUpCard";
import SignUpForm from "../components/signup/SignUpForm";

// SignUpPage is now lean — no layout concerns, just state + card + form
export default function SignUpPage() {
  const [fullName,   setFullName]   = useState("");
  const [department, setDepartment] = useState("");
  const [role,       setRole]       = useState(null);

  const handleNext = () => {
    if (!fullName || !department || !role) return;
    alert(`Proceeding as ${role}: ${fullName} from ${department}`);
  };

  return (
    <SignUpCard
      title="Create a new account"
      subtitle="Enter your details to Sign up."
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
      />
    </SignUpCard>
  );
} 