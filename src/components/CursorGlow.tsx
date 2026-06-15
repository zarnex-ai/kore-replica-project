import { useEffect, useState } from 'react';

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device or touch screen
    const checkDevice = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0)
      );
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('.card-glass') ||
          target.closest('.card-kore') ||
          target.closest('[role="button"]') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className="cursor-glow"
        style={{
          left: position.x,
          top: position.y,
          width: isHovered ? '80px' : '44px',
          height: isHovered ? '80px' : '44px',
          backgroundColor: isHovered ? 'rgba(189, 95, 189, 0.25)' : 'rgba(189, 95, 189, 0.1)',
          border: isHovered ? '2px solid rgba(189, 95, 189, 0.7)' : '1px solid rgba(189, 95, 189, 0.3)',
          transition: 'width 0.2s cubic-bezier(0.25, 1, 0.5, 1), height 0.2s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.2s ease, border-color 0.2s ease',
        }}
      />
      {/* Inner precise dot */}
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          backgroundColor: 'rgb(189, 95, 189)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s ease-out, height 0.15s ease-out',
        }}
      />
    </>
  );
};