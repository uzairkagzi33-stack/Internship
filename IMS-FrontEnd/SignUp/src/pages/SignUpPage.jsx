import { useState } from "react";

import Header            from "../components/layout/Header";
import Footer            from "../components/layout/Footer";
import PatternBackground from "../components/layout/PatternBackground";
import SignUpCard        from "../components/signup/SignUpCard";
import SignUpForm        from "../components/signup/SignUpForm";

export default function SignUpPage() {
  const [fullName,    setFullName]    = useState("");
  const [department,  setDepartment]  = useState("");
  const [role,        setRole]        = useState(null); // "employee" | "engineer"

  const handleNext = () => {
    if (!fullName || !department || !role) return;
    alert(`Proceeding as ${role}: ${fullName} from ${department}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F2F5] font-">

      {/* ── Header: 1352×40 ───────────────────────────────────────── */}
      <Header />

      {/* ── Main: grows, centers card, holds pattern behind ──────── */}
      <main className="flex-1 flex items-center justify-center relative">

        {/* Pattern: 1140×440, absolutely centered behind card */}
        <PatternBackground />

        {/* Card: 437×578 */}
        <SignUpCard>
          <SignUpForm
            fullName={fullName}       setFullName={setFullName}
            department={department}   setDepartment={setDepartment}
            role={role}               setRole={setRole}
            onNext={handleNext}
          />
        </SignUpCard>

      </main>

      {/* ── Footer: 1352×20 ───────────────────────────────────────── */}
      <Footer />

    </div>
  );
}