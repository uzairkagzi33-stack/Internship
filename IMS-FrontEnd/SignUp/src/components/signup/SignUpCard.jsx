import CustomIcon from "../icons/CustomIcon";

// Card header: icon + title + subtitle (373×(88+16+60))
function CardHeader() {
  return (
    <div className="flex flex-col items-center" style={{ width: 373 }}>
      {/* Profile icon: 88×88 */}
      <div style={{ width: 88, height: 88 }}>
        <CustomIcon />
      </div>

      {/* Title block: 373×60 */}
      <div
        className="flex flex-col items-center text-center mt-4"
        style={{ width: 373, height: 60 }}
      >
        {/* "Create a new account": 373×32 */}
        <h1
          className="font-semibold text-gray-900"
          style={{ width: 373, height: 32, fontSize: 24, lineHeight: "32px" }}
        >
          Create a new account
        </h1>
        {/* Subheading: 373×24 */}
        <p
          className="text-gray-500"
          style={{ width: 373, height: 24, fontSize: 14, lineHeight: "24px" }}
        >
          Enter your details to Sign up.
        </p>
      </div>
    </div>
  );
}

// Content divider: 373×0, introduces 10px gap top + bottom
function ContentDivider() {
  return (
    <div style={{ width: 373, height: 0, marginTop: 22, marginBottom: 10 }}>
      <hr className="border-t border-gray-200" style={{ margin: 0 }} />
    </div>
  );
}

// Card shell: 437×578, shadow-md, renders children (the form) inside
export default function SignUpCard({ children }) {
  return (
    <div
      className="relative z-10 bg-white rounded-2xl shadow-md flex flex-col items-center"
      style={{ width: 437, minHeight: 578, padding: "32px" }}
    >
      <CardHeader />
      <ContentDivider />
      {children}
    </div>
  );
}