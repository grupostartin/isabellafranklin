import React, { useEffect, useRef, useState } from "react";

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

/**
 * Animated mesh-gradient background — adapted for Vite/React.
 * Uses the site's amber/brown palette and adds top+bottom vignette fades
 * so section boundaries look clean with no harsh cuts.
 */
const BackgroundGradientAnimation: React.FC<BackgroundGradientAnimationProps> = ({
  gradientBackgroundStart = "rgb(15, 8, 7)",
  gradientBackgroundEnd = "rgb(6, 2, 1)",
  firstColor = "233, 122, 1",
  secondColor = "209, 82, 62",
  thirdColor = "130, 45, 0",
  fourthColor = "80, 20, 3",
  fifthColor = "160, 70, 0",
  pointerColor = "233, 122, 1",
  size = "60%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    el.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    el.style.setProperty("--first-color", firstColor);
    el.style.setProperty("--second-color", secondColor);
    el.style.setProperty("--third-color", thirdColor);
    el.style.setProperty("--fourth-color", fourthColor);
    el.style.setProperty("--fifth-color", fifthColor);
    el.style.setProperty("--pointer-color", pointerColor);
    el.style.setProperty("--size", size);
    el.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart, gradientBackgroundEnd,
    firstColor, secondColor, thirdColor, fourthColor, fifthColor,
    pointerColor, size, blendingValue,
  ]);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) return;
      setCurX(prev => prev + (tgX - prev) / 20);
      setCurY(prev => prev + (tgY - prev) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }
    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const blobBase = `absolute w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`;

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] ${containerClassName ?? ""}`}
      onMouseMove={interactive ? handleMouseMove : undefined}
    >
      {/* Hidden SVG filter for goo blob effect */}
      <svg className="hidden">
        <defs>
          <filter id="lp2-blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Children above gradient */}
      {children && (
        <div className={`relative z-10 ${className ?? ""}`}>{children}</div>
      )}

      {/* Animated blobs — reduced opacity for subtlety */}
      <div
        className={`absolute inset-0 ${isSafari ? "blur-2xl" : ""}`}
        style={isSafari ? {} : { filter: "url(#lp2-blurMe) blur(40px)" }}
      >
        <div className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.55)_0,_rgba(var(--first-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:center_center] animate-first opacity-80`} />
        <div className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.45)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-400px)] animate-second opacity-60`} />
        <div className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.4)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%+400px)] animate-third opacity-70`} />
        <div className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.4)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-200px)] animate-fourth opacity-50`} />
        <div className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.45)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-65`} />
        {interactive && (
          <div
            ref={interactiveRef}
            className={`absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.35)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-50`}
          />
        )}
      </div>

      {/* Vignette overlays — fade into section bg at top & bottom edges for clean transitions */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none z-[5]"
        style={{ background: "linear-gradient(to bottom, rgb(15,8,7) 0%, transparent 100%)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-[5]"
        style={{ background: "linear-gradient(to top, rgb(15,8,7) 0%, transparent 100%)" }}
      />
    </div>
  );
};

export default BackgroundGradientAnimation;
