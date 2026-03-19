import CustomIcon from "../icons/CustomIcon";

// ── Content Divider ───────────────────────────────────────────────────────────
function ContentDivider() {
  return (
    <div style={{ width: 373, height: 0}}>
      <hr className="border-t border-[#E5E7EB]" style={{ margin: 0 }} />
    </div>
  );
}

// ── Card Header ───────────────────────────────────────────────────────────────
function CardHeader({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center" style={{ width: 373, gap:8 }}>
      <div style={{ width: 88, height: 88 }}>
        {icon ?? <CustomIcon />}
      </div>
      <div
        className="flex flex-col items-center text-center "
        style={{ width: 373, height: 60 }}
      >
        <h1
          className="font-semibold text-gray-900"
          style={{ width: 373, height: 32, fontSize: 24, lineHeight: "32px" }}
        >
          {title}
        </h1>
        <p
          className="text-gray-500"
          style={{ width: 373, height: 24, fontSize: 14, lineHeight: "24px" }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

// ── SignUpCard ────────────────────────────────────────────────────────────────
// Props:
//   title       (string)    — card heading
//   subtitle    (string)    — card subheading
//   icon        (ReactNode) — optional icon, defaults to <CustomIcon />
//   showDivider (bool)      — show HR divider, default true
//   width       (number)    — card width px, default 437
//   minHeight   (number)    — card min-height px, default 578
//   children    (ReactNode) — card body content
export default function SignUpCard({
  title       = "Create a new account",
  subtitle    = "Enter your details to Sign up.",
  icon,
  showDivider = true,
  width       = 437,
  minHeight   = 600,
  children,
}) {
  return (
    <div
      className="relative z-10 bg-white rounded-3xl shadow-md flex flex-col items-center"
      style={{ width, minHeight, padding: "32px", gap:"24px" }}
    >
      <CardHeader icon={icon} title={title} subtitle={subtitle} />
      {showDivider && <ContentDivider />}
      {children}
    </div>
  );
}