import { CircleUserRound, Building2, Mail, LockKeyhole, ArrowLeft } from "lucide-react";

// ── Reusable Input Field ──────────────────────────────────────────────────────
// Props:
//   id          (string)    — input id + label htmlFor
//   label       (string)    — label text
//   placeholder (string)    — input placeholder
//   value       (string)    — controlled value
//   onChange    (fn)        — change handler
//   icon        (ReactNode) — lucide icon component
//   type        (string)    — input type, default "text"
export function InputField({ id, label, placeholder, value, onChange, icon: Icon, type = "text", isPassword}) {
  return (
    <div className="flex flex-col" style={{ width: 373, height: 58, gap: 4 }}>
      <label
        htmlFor={id}
        className="text-gray-900 font-medium"
        style={{ height: 14, fontSize: 12, lineHeight: "14px" }}
      >
        {label}
      </label>
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
        //   className={isPassword ? "flex w-full pr-3 text-gray-900  bg-white border placeholder-gray-600 border-gray-200 rounded-lg outline-none  focus:border-blue-500 transition-all placeholder:font-semibold placeholder:tracking-wider placeholder:text-3xl  ":"w-full pr-3 text-gray-900  bg-white border placeholder-gray-500 border-gray-200 rounded-lg outline-none  focus:border-blue-500 transition-all "}
        // style={ isPassword ? {height: 36, fontSize: 17, gap: 3,paddingLeft: Icon ? 32 : 12}  : 
        //         {height: 36, fontSize: 14, paddingLeft: Icon ? 32 : 12}
        //       }
               className={isPassword ? "w-full pr-3 text-gray-900 bg-white border placeholder-gray-500 border-gray-200 rounded-lg outline-none focus:border-blue-500 placeholder:font-bold  transition-all tracking-widest  placeholder:text-md placeholder:  placeholder:tracking-widest font-bold text-md"  : "w-full  pr-3 text-gray-900 bg-white border placeholder-gray-500 border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-all"}
        style={isPassword ? {height: 36, paddingLeft: Icon ? 32 : 12, letterSpacing: '0.3em'} : {height: 36, fontSize: 14, paddingLeft: Icon ? 32 : 12}}
        /> 
        {/* fontSize: 14, */}
        
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
export function EmailPassword({
  email, setEmail,
  passwordA, setPasswordA,
  passwordB, setPasswordB,
  buttonLabel = "Register",
  onSubmit, footerText = "Back",
  footerLinkTo = "/signup",
} 
) {
  return (
    <div className="flex flex-col" style={{ width: 373, height: 58, gap: 4 }}>
    <form
    className="flex flex-col"
        style={{ width: 373, gap: 12 }}
        onSubmit={e => { e.preventDefault(); onSubmit(); }}>
        {/* { id, label, placeholder, value, onChange, icon: Icon, type = "text" } */}

        <InputField 
        id='email'
        label='Email'
        placeholder="Enter your email"
        value={email}
        onChange={e=> setEmail(e.target.value)}
        icon={Mail}
        type="email"
        />
        <InputField 
        id='password1'
        label='Password'
        placeholder= "• • • • • • • • • • "
        value={passwordA}
        onChange={setPasswordA}
        icon={LockKeyhole}
        type="password"
isPassword={true}
        />
        <InputField 
        id='password2'
        label='Confirm Password'
        placeholder= "• • • • • • • • • • "
        value={passwordB}
        onChange={setPasswordB}
        icon={LockKeyhole}
        type="password"
        isPassword={true}
        />

      {/* <label
        htmlFor="email"
        className="text-gray-900 font-medium"
        style={{ height: 14, fontSize: 12, lineHeight: "14px" }}
      >
        Email
      </label>
      <div className="relative flex items-center" style={{ height: 36 }}>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          Icon:Mail
          onChange={e => setEmail(e.target.value)}
          className="w-full pr-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-lg outline-none  focus:border-blue-500 transition-all"
          style={{ height: 36, fontSize: 14, paddingLeft: 12 }}
        />
      </div>
      <label
        htmlFor="password1"
        className="text-gray-900 font-medium"
        style={{ height: 14, fontSize: 12, lineHeight: "14px" }}
      >
        Password
      </label>
      <div className="relative flex items-center" style={{ height: 36 }}>
        <input
          id="password1"
          icon={LockKeyhole}
          type="password"
          placeholder="Enter your password"
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          className="w-full pr-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-lg outline-none  focus:border-blue-500 transition-all"
          style={{ height: 36, fontSize: 14, paddingLeft: 12 }}
        />
      </div>
      <label
        htmlFor="password2"
        className="text-gray-900 font-medium"
        style={{ height: 14, fontSize: 12, lineHeight: "14px" }}
      >
        Confirm Password
      </label>
      <div className="relative flex items-center" style={{ height: 36 }}>
        <input
          id="password2"
          type="password"
          icon={LockKeyhole}
          placeholder="Confirm your password"
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          className="w-full pr-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-lg outline-none  focus:border-blue-500 transition-all"
          style={{ height: 36, fontSize: 14, paddingLeft: 12 }}
        />
      </div> */}
    </form>
     <button
        type="button"
        onClick={onSubmit}
        className="mt-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors cursor-pointer"
        style={{ width: 373, minHeight: 42, fontSize: 15 }}
      >
        {buttonLabel}
      </button>
<Back footerText={footerText} footerLinkTo={footerLinkTo} />

    </div>
  );
}
export function Back({footerText, footerLinkTo}){
  return footerText && (
    <div
      style={{ width: 373, height: 42, fontSize: 13, lineHeight: "16px", textAlign: "left" }}
    >
    <div
    className=" flex mt-4 text-gray-950 underline-offset-2 underline cursor-pointer hover:text-blue-600 active:text-blue-800 font-bold"
    >

      <ArrowLeft size={16} />
      <a
        href={footerLinkTo}
        style={{ width: 34, height: 20 }}
      >
        {footerText}
      </a>
    </div>
    </div>
  );
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
  roleOptions,
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
      <button
        type="button"
        onClick={onNext}
        className="mt-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors cursor-pointer"
        style={{ width: 373, minHeight:42, fontSize: 15 }}
      >
        {buttonLabel}
      </button>

      {/* Footer link: 373×16 */}
      {footerText && (
        <p
          className="mt-4 text-center text-gray-500"
          style={{ width: 373, height: 16, fontSize: 13, lineHeight: "16px" }}
        >
          {footerText}{" "}
          <a href={footerLinkTo} className="text-blue-600 font-medium underline underline-offset-2">
            {footerLinkText}
          </a>
        </p>
      )}
    </>
  );
}