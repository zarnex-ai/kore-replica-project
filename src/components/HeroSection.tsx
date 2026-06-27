import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import ModelViewer from "./ModelViewer";
import GlobeRings from "./GlobeRings";

export const HeroSection = ({ onOpenDemo }: { onOpenDemo?: () => void }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 25 });

  // Scroll animations: as user scrolls down, slide left to center, scale down slightly to avoid cropping
  const x = useTransform(smoothScrollY, [0, 480], [0, isDesktop ? -270 : 0]);
  const scale = useTransform(smoothScrollY, [0, 480], [1.0, 0.90]);
  const opacity = useTransform(smoothScrollY, [420, 680], [1.0, 0.7]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* Background Effects */}
      <div className="hero-grid-overlay" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-10px',
            animationDuration: `${8 + Math.random() * 12}s`,
            animationDelay: `${Math.random() * 8}s`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            opacity: 0.3 + Math.random() * 0.5,
          }}
        />
      ))}

      <div className="container-zarnex relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-20 lg:pt-0">

          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--zarnex-cyan-dim)] bg-[rgba(0,200,255,0.05)] mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--zarnex-cyan)] animate-pulse" />
              <span className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: 'var(--zarnex-cyan)' }}>
                AI-POWERED SYSTEMS
              </span>
              <span className="text-[10px] text-white/30">✦—✦</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-7xl leading-[1.05] tracking-tight text-white mb-6"
            >
              INTELLIGENCE{' '}
              <br />
              BEYOND{' '}
              <span className="text-glow" style={{ color: 'var(--zarnex-cyan)' }}>
                LIMITS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/40 mb-4"
            >
              BUILDING NEXT-GEN AI SOLUTIONS FOR A LIMITLESS FUTURE.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-white/50 max-w-lg mb-10 leading-relaxed"
            >
              We build intelligent systems that automate, optimize,
              and accelerate the future of industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <button
                onClick={() => onOpenDemo?.()}
                className="btn-primary"
              >
                EXPLORE SOLUTIONS
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="btn-outline"
              >
                WATCH INTRO
                <Play className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Column - 3D Model with Globe Rings and Parallax Scroll */}
          <motion.div
            style={{ x, scale, opacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex items-center justify-center relative z-20"
          >
            <div className="model-frame relative">
              {/* Outer ambient glow */}
              <div
                className="absolute inset-[-40px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(0,200,255,0.08) 0%, rgba(0,100,200,0.03) 40%, transparent 70%)',
                }}
              />

              {/* Globe wireframe rings overlay */}
              <GlobeRings />

              {/* 3D Model */}
              <div className="w-full h-full relative z-[5]">
                <ModelViewer modelPath="/zarnexfin3d.glb" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, #000000, transparent)' }}
      />
    </section>
  );
};

export default HeroSection;
