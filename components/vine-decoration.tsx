interface VineDecorationProps {
  className?: string
}

export function VineDecoration({ className = "" }: VineDecorationProps) {
  return (
    <svg className={className} viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main vine stems */}
      <path
        d="M50 50C80 80 120 100 150 140C180 180 200 220 230 260C260 300 280 340 310 380C340 420 360 460 380 500"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M100 80C130 110 170 130 200 170C230 210 250 250 280 290C310 330 330 370 360 410"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M20 120C50 150 90 170 120 210C150 250 170 290 200 330C230 370 250 410 280 450"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />

      {/* Branch offshoots */}
      <path d="M80 90 Q90 85 100 95" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M160 160 Q170 155 180 165" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M240 280 Q250 275 260 285" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M320 400 Q330 395 340 405" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Berries/fruits */}
      <circle cx="85" cy="95" r="4" fill="currentColor" opacity="0.6" />
      <circle cx="165" cy="165" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="245" cy="285" r="3.5" fill="currentColor" opacity="0.6" />
      <circle cx="325" cy="405" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="125" cy="215" r="2.5" fill="currentColor" opacity="0.4" />
      <circle cx="205" cy="335" r="3" fill="currentColor" opacity="0.5" />

      {/* Leaf shapes - more detailed */}
      <ellipse cx="90" cy="100" rx="12" ry="6" fill="currentColor" opacity="0.4" transform="rotate(45 90 100)" />
      <ellipse cx="170" cy="180" rx="10" ry="5" fill="currentColor" opacity="0.3" transform="rotate(-30 170 180)" />
      <ellipse cx="250" cy="300" rx="11" ry="5.5" fill="currentColor" opacity="0.4" transform="rotate(60 250 300)" />
      <ellipse cx="330" cy="420" rx="9" ry="4.5" fill="currentColor" opacity="0.3" transform="rotate(-45 330 420)" />
      <ellipse cx="130" cy="220" rx="8" ry="4" fill="currentColor" opacity="0.35" transform="rotate(30 130 220)" />
      <ellipse cx="210" cy="340" rx="10" ry="5" fill="currentColor" opacity="0.4" transform="rotate(-60 210 340)" />

      {/* Additional small leaves */}
      <ellipse cx="75" cy="85" rx="6" ry="3" fill="currentColor" opacity="0.3" transform="rotate(60 75 85)" />
      <ellipse cx="155" cy="155" rx="7" ry="3.5" fill="currentColor" opacity="0.35" transform="rotate(-45 155 155)" />
      <ellipse cx="235" cy="275" rx="6" ry="3" fill="currentColor" opacity="0.3" transform="rotate(90 235 275)" />
      <ellipse cx="315" cy="395" rx="5" ry="2.5" fill="currentColor" opacity="0.25" transform="rotate(-30 315 395)" />
    </svg>
  )
}
