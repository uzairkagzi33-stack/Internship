import { CircleUserRound, Building2 } from "lucide-react";

// ── Reusable Input Field ──────────────────────────────────────────────────────
// Props:
//   id          (string)    — input id + label htmlFor
//   label       (string)    — label text
//   placeholder (string)    — input placeholder
//   value       (string)    — controlled value
//   onChange    (fn)        — change handler
//   icon        (ReactNode) — lucide icon component
//   type        (string)    — input type, default "text"
export function InputField({ id, label, placeholder, value, onChange, icon: Icon, type = "text" }) {
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
          className="w-full pr-3 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-lg outline-none  focus:border-blue-500 transition-all"
          style={{ height: 36, fontSize: 14, paddingLeft: Icon ? 32 : 12 }}
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
        style={{ width: 373, height: 42, fontSize: 15 }}
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
          <a href={footerLinkTo} className="text-blue-600 font-medium hover:underline">
            {footerLinkText}
          </a>
        </p>
      )}
    </>
  );
}