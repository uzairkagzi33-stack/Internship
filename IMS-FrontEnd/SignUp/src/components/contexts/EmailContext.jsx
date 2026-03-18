import { createContext, useContext, useState } from "react";

// ── 1. Create ─────────────────────────────────────────────────────────────────
const EmailContext = createContext();

// ── 2. Custom hook ────────────────────────────────────────────────────────────
// Use this in any component instead of importing both useContext + EmailContext
export function UseEmail() {
  const ctx = useContext(EmailContext);
  if (!ctx) throw new Error("useEmail must be used inside <EmailProvider>");
  return ctx;
}

// ── 3. Provider ───────────────────────────────────────────────────────────────
// Wrap your router/app with this so all pages can read/write the email
export function EmailProvider({ children }) {
    const [email, setEmail] = useState("");

    const clearEmail = () => setEmail("");

    return (
    <EmailContext.Provider value={{ email, setEmail, clearEmail }}>
        {children}
    </EmailContext.Provider>
    );
}