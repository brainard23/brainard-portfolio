import { useId } from "react";
import styles from "./MiniBrainard.module.css";

interface MiniBrainardProps {
  size: number;
  typing?: boolean;
  wave?: boolean;
}

/** Chibi Brainard drawn after public/assets/me.png. Swap for a painted PNG later if wanted. */
const MiniBrainard = ({ size, typing = false, wave = false }: MiniBrainardProps) => {
  const id = useId();
  const bgId = `${id}-bg`;
  const glowId = `${id}-glow`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Mini Brainard"
      className={typing ? styles.typing : undefined}
    >
      <defs>
        <radialGradient id={bgId} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#3b0a2a" />
          <stop offset="100%" stopColor="#14051a" />
        </radialGradient>
        <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="60" cy="60" r="58" fill={`url(#${bgId})`} />
      <polygon
        points="60,12 101,36 101,84 60,108 19,84 19,36"
        fill="none"
        stroke="#ff3fa4"
        strokeWidth="3"
        filter={`url(#${glowId})`}
      />

      <g className={styles.bob}>
        {/* body: black jacket over white tee */}
        <path d="M34 118 Q36 92 60 90 Q84 92 86 118 Z" fill="#1d1d22" />
        <path d="M52 91 L60 108 L68 91 Z" fill="#f4f4f5" />
        <path d="M52 91 L46 118 M68 91 L74 118" stroke="#3a3a42" strokeWidth="1.5" />

        {/* waving arm */}
        <g className={wave ? styles.wave : undefined}>
          <path d="M82 98 Q94 90 96 76" stroke="#1d1d22" strokeWidth="9" strokeLinecap="round" fill="none" />
          <circle cx="96" cy="72" r="6" fill="#e0a47a" />
        </g>

        {/* neck + head */}
        <rect x="54" y="80" width="12" height="12" rx="4" fill="#c98b63" />
        <ellipse cx="33" cy="58" rx="5" ry="7" fill="#d9976d" />
        <ellipse cx="87" cy="58" rx="5" ry="7" fill="#d9976d" />
        <ellipse cx="60" cy="56" rx="27" ry="29" fill="#e0a47a" />

        {/* hair: swept-up black spikes */}
        <path
          d="M31 54 Q28 30 42 22 Q44 14 54 16 Q60 8 68 14 Q78 12 82 22 Q93 30 89 54
             Q86 40 80 36 Q74 32 66 34 Q70 28 62 28 Q56 34 46 32 Q40 38 36 40 Q32 46 31 54 Z"
          fill="#17171a"
        />
        <path d="M48 20 Q56 14 64 18 M70 18 Q78 20 82 28" stroke="#3a3a42" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* brows */}
        <path d="M43 47 Q49 43 55 46" stroke="#17171a" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M65 46 Q71 43 77 47" stroke="#17171a" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* eyes */}
        <g className={styles.blink}>
          <ellipse cx="49" cy="56" rx="5" ry="6" fill="#3b2314" />
          <ellipse cx="71" cy="56" rx="5" ry="6" fill="#3b2314" />
          <circle cx="50.5" cy="54" r="1.8" fill="#fff" />
          <circle cx="72.5" cy="54" r="1.8" fill="#fff" />
        </g>

        {/* blush, nose, smile */}
        <ellipse cx="42" cy="66" rx="4" ry="2.5" fill="#f08a8a" opacity="0.55" />
        <ellipse cx="78" cy="66" rx="4" ry="2.5" fill="#f08a8a" opacity="0.55" />
        <path d="M59 62 Q60 65 62 63" stroke="#b5764f" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M53 71 Q60 76 67 71" stroke="#8a4b3a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default MiniBrainard;
