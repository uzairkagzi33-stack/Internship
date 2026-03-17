import React from "react";

const VerifyEmailIcon = (props) => {
  return (
    <svg
      width={88}
      height={88}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.5"
        y="0.5"
        width="87"
        height="87"
        rx="43.5"
        fill="url(#paint0_linear)"
      />
      <rect
        x="0.5"
        y="0.5"
        width="87"
        height="87"
        rx="43.5"
        stroke="url(#paint1_linear)"
      />

      <g filter="url(#filter0_d)">
        <rect x="16" y="16" width="56" height="56" rx="28" fill="white" />
        <rect
          x="16.5"
          y="16.5"
          width="55"
          height="55"
          rx="27.5"
          stroke="#E5E7EB"
        />

        <path
          d="M32 38L44 46L56 38"
          stroke="#4B5563"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="32"
          y="38"
          width="24"
          height="16"
          rx="2"
          stroke="#4B5563"
          strokeWidth="2"
        />

        <path
          d="M38 48L42 52L50 44"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <defs>
        <filter
          id="filter0_d"
          x="15"
          y="16"
          width="58"
          height="58"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>

        <linearGradient
          id="paint0_linear"
          x1="44"
          y1="0"
          x2="44"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4E5E7" stopOpacity="0.48" />
          <stop offset="1" stopColor="#F7F8F8" stopOpacity="0" />
          <stop offset="1" stopColor="#E4E5E7" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="paint1_linear"
          x1="44"
          y1="0"
          x2="44"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4E5E7" />
          <stop offset="0.765625" stopColor="#E4E5E7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VerifyEmailIcon;