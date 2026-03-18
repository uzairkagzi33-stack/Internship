import { useRef } from "react";
// ── OtpInput ──────────────────────────────────────────────────────────────────
// Props:
//   value      (string)   — 4-char controlled string e.g. "4709"
//   onChange   (fn)       — called with full 4-digit string on every change
//   length     (number)   — number of boxes, default 4
export default function OtpInput({ value = "", onChange, length = 4, error }) {
    // const id = useId()
  const refs = useRef([]);

  // Split string into array of individual chars
  const digits = Array.from({ length }, (_, i) => value[i] || "");

  const update = (arr) => onChange?.(arr.join(""));

  const handleInput = (e, idx) => {
    const digit = e.target.value.replace(/[^0-9]/g, "").slice(-1);
    const next  = [...digits];
    next[idx]   = digit;
    update(next);
    if (digit && idx < length - 1) refs.current[idx + 1]?.focus();
  };

  const handleKey = (e, idx) => {
    if (e.key === "Backspace") {
      if (!digits[idx] && idx > 0) {
        const next = [...digits];
        next[idx - 1] = "";
        update(next);
        refs.current[idx - 1]?.focus();
      } else {
        const next = [...digits];
        next[idx] = "";
        update(next);
      }
    }
    if (e.key === "ArrowLeft"  && idx > 0)          refs.current[idx - 1]?.focus();
    if (e.key === "ArrowRight" && idx < length - 1) refs.current[idx + 1]?.focus();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, length);
    const next  = Array.from({ length }, (_, i) => text[i] || "");
    update(next);
    refs.current[Math.min(text.length, length - 1)]?.focus();
  };

  return (
    // Wrapper: 376×64, gap 10px
    <div
      className="flex"
      style={{ width: 376, height: 64, gap: 10 }}
    >
    <span style={{color:"red"}}>{error}</span>
      {digits.map((digit, idx) => (
        <input
          key={idx}
          ref={el => (refs.current[idx] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]"
          maxLength={1}
          value={digit}
        //   id= {Math.random}
        id={idx}
          onChange={e => handleInput(e, idx)}
          onKeyDown={e => handleKey(e, idx)}
          onPaste={handlePaste}
          className="border border-gray-200 rounded-[10px] text-center text-gray-900 bg-white outline-none transition-all
            focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
          style={{
            width: 86.5,
            height: 64,
            fontSize: 24,
            fontWeight: 500,
            lineHeight: "32px",
            // keep filled boxes highlighted even when not focused
            borderColor: digit ? "rgba(37, 99, 235, 1)" : undefined,
          }}
        />
      ))}
    </div>
  );
}