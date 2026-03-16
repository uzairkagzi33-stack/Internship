import { CircleUserRound , Building2 } from "lucide-react";

// Reusable text input field with left icon
// eslint-disable-next-line no-unused-vars
function InputField({ id, label, placeholder, value, onChange, icon: Icon }) {
  return (
    // Wrapper: 373×58, gap spacing/2 (4px)
    <div className="flex flex-col" style={{ width: 373, height: 58, gap: 4 }}>
      {/* Label: 373×14 */}
      <label
        htmlFor={id}
        className="text-[#111928] font-medium"
        style={{ height: 14, fontSize: 12, lineHeight: "14px" }}
      >
        {label}
      </label>
      {/* Input: 373×36 */}
      <div className="relative flex items-center" style={{ height: 36 }}>
        <Icon 
        size={14}
          className="absolute left-3 text-[#737373] pointer-events-none"
          strokeWidth={1.5}
        />
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-8 pr-3 text-[#111928] placeholder-[#9CA3AF] bg-white border border-[#E5E7EB] rounded-lg outline-none  transition-all"
          style={{ height: 36, fontSize: 14 }}
        />
      </div>
    </div>
  );
}

// Role selector — two toggle buttons
function RoleSelector({ role, onSelect }) {
  const ROLES = [
    { value: "employee",  label: "Employee" },
    { value: "engineer",  label: "Support engineer" },
  ];

  return (
    // Wrapper: 373×64, gap 8px
    <div className="flex flex-col" style={{ width: 373, height: 64, gap: 8 }}>
      {/* Label: 373×14 */}
      <label
        className="text-gray-900 font-medium"
        style={{ height: 14, fontSize: 12, lineHeight: "14px" }}
      >
        Role
      </label>
      {/* Button row: 373×42 */}
      <div className="flex gap-2" style={{ height: 42 }}>
        {ROLES.map(({ value, label }) => {
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
                borderColor:     selected ? "rgb(38, 100, 235)" : "#E5E7EB",
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

// Full form — wraps all fields (373×204 form area)
export default function SignUpForm({ fullName, setFullName, department, setDepartment, role, setRole, onNext }) {
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
        <RoleSelector role={role} onSelect={setRole} />
      </form>

      {/* Next button: 373×42, outside form */}
      <button
        type="button"
        onClick={onNext}
        className="mt-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors cursor-pointer"
        style={{ width: 373, height: 42, fontSize: 15 }}
      >
        Next
      </button>

      {/* Already have an account: 373×16 */}
      <p
        className="mt-4 text-center text-gray-500"
        style={{ width: 373, height: 16, fontSize: 13, lineHeight: "16px" }}
      >
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 font-medium  underline">
          Login
        </a>
      </p>
    </>
  );
}