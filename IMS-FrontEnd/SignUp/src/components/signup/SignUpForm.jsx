import { CircleUserRound, Building2, Mail, LockKeyhole, ArrowLeft } from "lucide-react";
import { useState } from "react";
import {  Eye, EyeOff } from "lucide-react";

// ── Reusable Input Field ──────────────────────────────────────────────────────
// Props:
//   id          (string)    — input id + label htmlFor
//   label       (string)    — label text
//   placeholder (string)    — input placeholder
//   value       (string)    — controlled value
//   onChange    (fn)        — change handler
//   icon        (ReactNode) — lucide icon component
//   type        (string)    — input type, default "text"
export function InputField({ id, label, placeholder, value, onChange, icon: Icon, type = "text", error}) {
  return (
    <div className="flex flex-col" style={{ width: 373, height: 58, gap: 8 }}>
      <div
      className="flex justify-between "
      >

      <label
        htmlFor={id}
        className="text-gray-900 font-medium justify-start"
        style={{ height: 14, fontSize: 12, lineHeight: "14px" }}
      >
        {label}
      </label>
<span className=" text-red-600"
style={{fontSize: 12, height:14}}
>{error}</span>
      </div>
      <div className="relative flex items-center" style={{ height: 36 }}>
        {Icon && (
          <Icon
            size={15}
            className="absolute left-3 text-gray-600 pointer-events-none"
            strokeWidth={1.5}
          />
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
               className= "w-full  pr-3 text-gray-900 bg-white border placeholder-gray-500 border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-all"
        style={{height: 36, fontSize: 14, paddingLeft: Icon ? 32 : 12}}
        /> 
        
        
      </div>
    </div>
  );
}

// ── Role Selector ─────────────────────────────────────────────────────────────
// Props:
//   role     (string)   — currently selected value
//   onSelect (fn)       — callback with selected value
//   options  (array)    — [{ value, label }], defaults to Employee/Support engineer
export function RoleSelector({
  role,
  onSelect,
  options = [
    { value: "employee", label: "Employee" },
    { value: "engineer", label: "Support engineer" },
  ],
}) {
  return (
    <div className="flex flex-col" style={{ width: 373, height: 64, gap: 8 }}>
      <label
        className="text-gray-900 font-medium"
        style={{ height: 14, fontSize: 12, lineHeight: "14px" }}
      >
        Role
      </label>
      <div className="flex gap-2" style={{ height: 42 }}>
        {options.map(({ value, label }) => {
          const selected = role === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => onSelect(value)}
              className="flex-1 rounded-lg border font-medium transition-all cursor-pointer"
              style={{
                height: 42,
                fontSize: 14,
                borderColor:     selected ? "rgba(37, 99, 235, 1)" : "#E5E7EB",
                // backgroundColor: selected ? "rgba(37, 99, 235, 0.06)" : "#ffffff",
                // color:           selected ? "rgba(37, 99, 235, 1)" : "#111928",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Back({footerText, footerLinkTo, align = 'center', backArrow = 'true'}){
  return footerText && (
    <div
      className={`flex w-full text-gray-950 px-2.5 py-4 gap-0.5 underline-offset-2 underline font-bold ${align === 'left' ? 'justify-start' : 'justify-center'}`}
      style={{ width: 373, height: 42 }}
    >
      <div 
      
      className="cursor-pointer  hover:text-blue-600 active:text-blue-800 flex items-center gap-1">
        { (backArrow == "true") ?
        <ArrowLeft size={16} />:null
        }
        
        <a
          href={footerLinkTo}
          className="font-medium leading-5 tracking-tighter"
          style={{ width :50, height:20 }}
        >
          {footerText}
        </a>
      </div>
    </div>
  );
}
export function Button({ onNext, buttonLabel = "Next" }){
  return (
    <button
        type="button"
        onClick={onNext}
        className="rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors cursor-pointer"
        style={{ width: 373, minHeight:42, fontSize: 15 }}
      >
        {buttonLabel}
      </button>
  )
}




export function PasswordField({
  id          = "password",
  label       = "Password",
  placeholder = "• • • • • • • • • • ",
  value, error,
  onChange,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col" style={{ width: 373, height: 70, gap: 8 }}>
      <div
      className="flex justify-between "
      >

      <label
        htmlFor={id}
        className="text-gray-900 font-medium justify-start"
        style={{ height: 14, fontSize: 12, lineHeight: "14px" }}
      >
        {label}
      </label>
    <span className=" text-red-600"
      style={{fontSize: 12, height:14}}>
          {error}
    </span>
      </div>
      <div className="relative flex items-center" style={{ height: 36 }}>

        {/* Lock — left */}
        <LockKeyhole
          size={15}
          className="absolute left-3 text-gray-600 pointer-events-none"
          strokeWidth={1.5}
        />

        {/* Input */}
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          //, letterSpacing: '0.3em'  placeholder:font-bold  transition-all tracking-widest  placeholder:text-md placeholder:tracking-widest
          className="w-full px-8 text-gray-900 placeholder:tracking-tighter bg-white border placeholder-gray-400 border-gray-200 rounded-lg outline-none focus:border-blue-500 "
          style={{ height: 36, paddingLeft: 32, letterSpacing:'0.15rem'}}  
        />

        {/* Eye toggle — right, inside input */}
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setShow(prev => !prev)}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-2 flex items-center justify-center text-gray-400 hover:text-gray-500 transition-colors"
          style={{ padding: 4 }}
        >
          {show
            ? <EyeOff size={15} strokeWidth={1.5}  
          className=" text-gray-600 pointer-events-none"

            />
            : <Eye    size={15} strokeWidth={1.5} 
          className=" text-gray-600 pointer-events-none"

            />
          }
        </button>

      </div>
    </div>
    // </div>
  );
}


export function Footer({ footerText, footerLinkText, footerLinkTo }) {
  return footerLinkText ? (
    <p className="text-center text-gray-500" style={{ width: 373, height: 16, fontSize: 13, lineHeight: "16px" }}>
      {footerText}{" "}
      <a href={footerLinkTo} className="text-blue-600 font-medium underline underline-offset-2">
        {footerLinkText}
      </a>
    </p>
  ) : (<p className="mt-4 text-center text-gray-500" style={{ width: 373, height: 16, fontSize: 13, lineHeight: "16px" }}>
      {footerText}
      </p>)
}


// ── SignUpForm ────────────────────────────────────────────────────────────────
// Props:
//   fullName      / setFullName    — full name field state
//   department    / setDepartment  — department field state
//   role          / setRole        — selected role state
//   onNext        (fn)             — submit handler
//   buttonLabel   (string)         — button text, default "Next"
//   footerText    (string)         — text before the link
//   footerLinkText(string)         — link label
//   footerLinkTo  (string)         — href for the footer link
//   roleOptions   (array)          — custom role options passed to RoleSelector
export default function SignUpForm({
  fullName,       setFullName,
  department,     setDepartment,
  role,           setRole,
  onNext,
  buttonLabel    = "Next",
  footerText     = "Already have an account?",
  footerLinkText = "Login",
  footerLinkTo   = "/login", 
  roleOptions,error
}) {
  return (
    <>
      {/* Form: 373×204 */}
      <form
        className="flex flex-col"
        style={{ width: 373, gap: 12 }}
        onSubmit={e => { e.preventDefault(); onNext(); }}
      >
        <InputField
          id="fullName"
          label="Full Name"
          placeholder="Enter your name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          icon={CircleUserRound}
          error={error}
        />
        <InputField
          id="department"
          label="Department"
          placeholder="Enter your department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
          icon={Building2}
        />
        <RoleSelector
          role={role}
          onSelect={setRole}
          options={roleOptions}
        />
      </form>

      {/* Submit button: 373×42, outside form */}
      <Button 
        onNext={onNext}
        buttonLabel={buttonLabel}

      />
      <Footer 
        footerText={footerText}
        footerLinkText={footerLinkText}
        footerLinkTo={footerLinkTo}
      />
      {/* Footer link: 373×16 */}
      
    </>
  );
}