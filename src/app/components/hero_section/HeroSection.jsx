"use client";
import React, { useEffect, useRef } from "react";

// Generated once per page-load; survives theme switches because it lives
// outside the component function scope.
const VISITOR_COUNT = Math.floor(Math.random() * (500 - 400 + 1)) + 400;

// Stable key for TypeAnimation — derived from VISITOR_COUNT so it is
// constant for the entire session but unique across hard reloads.
const TYPE_ANIM_KEY = `type-anim-${VISITOR_COUNT}`; 

import { TypeAnimation } from "react-type-animation";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import BorderGlow from "../border_glow/BorderGlow";

// FIX: themes set different line-heights on .hero-visitor-count (e.g. 45px
// for a 30px font). Using height:'1em' would clip. Instead we measure the
// actual rendered digit height via a hidden ref and use that for the clip
// window and all translateY calculations.

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function DigitColumn({ digit, delay = 0 }) {
  const [scope, animate] = useAnimate();
  const measureRef = useRef(null);
  const [digitH, setDigitH] = React.useState(null);

  // Measure actual rendered height of one digit (respects theme font-size)
  useEffect(() => {
    if (measureRef.current) {
      setDigitH(measureRef.current.getBoundingClientRect().height);
    }
  }, []);

  // Run the scroll animation once we know the real digit height
  useEffect(() => {
    if (digitH === null || !scope.current) return;
    animate(
      scope.current,
      { y: -(digit * digitH) },
      { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }
    );
  }, [digit, delay, digitH]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Hidden measurement span — 1 digit with reset line-height */}
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          lineHeight: 'normal',
          display: 'inline-block',
        }}
      >
        0
      </span>

      {/* Visible clipping window — height matches the measured digit */}
      <span
        style={{
          display: 'inline-block',
          overflow: 'hidden',
          height: digitH ? `${digitH}px` : '1em',
          verticalAlign: 'bottom',
          position: 'relative',
        }}
      >
        <span
          ref={scope}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            willChange: 'transform',
          }}
        >
          {DIGITS.map((d) => (
            <span
              key={d}
              style={{
                display: 'block',
                height: digitH ? `${digitH}px` : '1em',
                lineHeight: 'normal',
                textAlign: 'center',
              }}
            >
              {d}
            </span>
          ))}
        </span>
      </span>
    </>
  );
}

function SlotNumber({ value }) {
  const formatted = value.toLocaleString('en-US');
  const chars = formatted.split('');

  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-end', position: 'relative' }}>
      {chars.map((ch, i) => {
        if (ch === ',') {
          return (
            <span key={`comma-${i}`} style={{ display: 'inline-block', lineHeight: 'normal', alignSelf: 'flex-end' }}>
              ,
            </span>
          );
        }
        const digitValue = parseInt(ch, 10);
        // Stagger delay: rightmost digit animates first (slot machine feel)
        const delay = (chars.filter(c => c !== ',').length - 1 - chars.slice(0, i).filter(c => c !== ',').length) * 0.06;
        return <DigitColumn key={`digit-${i}`} digit={digitValue} delay={delay} />;
      })}
    </span>
  );
}

const HeroSection = () => {
  const [hovered, setHovered] = React.useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    let app;
    let model;

    const init = async () => {
      if (!canvasRef.current) return;

      const PIXI = await import("pixi.js");
      window.PIXI = PIXI;
      PIXI.utils.skipHello();
      const { Live2DModel } = await import("pixi-live2d-display/cubism4");

      app = new PIXI.Application({
        view: canvasRef.current,
        backgroundAlpha: 0,
        resizeTo: canvasRef.current.parentElement,
      });

      try {
        model = await Live2DModel.from("/live2d/hiyori/hiyori_pro_t11.model3.json");
        app.stage.addChild(model);

        const updateScale = () => {
          if (!model || !app) return;
          const scaleX = app.renderer.width / model.width;
          const scaleY = app.renderer.height / model.height;

          // Scale up to zoom in
          model.scale.set(Math.max(scaleX, scaleY) * 1.5);

          // Anchor to top-center so head is always visible
          model.anchor.set(0.5, 0);
          model.x = app.renderer.width / 2;
          // Set top of head slightly below the top of the canvas
          model.y = app.renderer.height * 0.05;
        };

        updateScale();
        app.renderer.on('resize', updateScale);

        // Enable interaction
        model.interactive = true;

        model.on('hit', (hitAreas) => {
          if (hitAreas.includes('Body')) {
            model.motion('Tap@Body');
          } else {
            model.motion('Tap');
          }
        });
      } catch (e) {
        console.error("Live2D Load Error:", e);
      }
    };

    const check = setInterval(() => {
      if (window.Live2DCubismCore) {
        clearInterval(check);
        init();
      }
    }, 100);

    return () => {
      clearInterval(check);
      if (app) app.destroy(false, true);
    };
  }, []);

  return (
    <section className="h-full w-full flex flex-col justify-center gap-4 sm:justify-evenly sm:py-4 lg:py-8">

      {/* ── Layout: 
          Mobile & Tablet: flex column, avatar first, then text, centered 
          lg+: grid, 12 cols, text left (span 8), avatar right (span 4) ── */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
        
        {/* Text Container: order 2 on mobile/tablet (below avatar), col-span 8 on lg+ (left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1 lg:col-span-8 place-self-center text-center lg:text-left justify-self-start w-full"
        >
          <h1 className="hero-heading mb-6 lg:mb-6">
            <span className="hero-heading-gradient">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              key={TYPE_ANIM_KEY}
              sequence={[
                "Rishi",
                1000,
                "a Full-Stack(MERN) Developer",
                1000,
                "a UI/UX Designer",
                1000,
                "a Flutter Developer",
                1000,
                "a Agentic AI Engineer",
                1000,
                "a Python Developer",
                1000,
                "a Competitive Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero-type-animation"
            />
          </h1>
          <p className="hero-description mb-8 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
            🌱 I&apos;m currently learning core AI/ML.
            <br />
            <br />
            💬 Want to build something cool together? Let&apos;s connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-5 lg:gap-4 items-center lg:justify-start">
            <Link
              href="mailto:rishi.cs.dev@gmail.com"
              className="hero-cta-primary px-5 py-2.5 sm:px-6 sm:py-3 w-full lg:w-fit flex items-center justify-center min-w-[120px]"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span className={`text-center whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${hovered ? 'w-0 opacity-0' : 'w-[65px] opacity-100'}`}>
                Hire Me
              </span>
              <span className={`text-center whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${hovered ? 'w-[185px] opacity-100' : 'w-0 opacity-0'}`}>
                rishi.cs.dev@gmail.com
              </span>
            </Link>
            <Link
              href={'https://drive.google.com/file/d/18Fof1b0Gwl4E2YnVQk5xIGLkc3N5XwP4/view'}
              className="hero-cta-secondary px-5 py-2.5 sm:px-6 sm:py-3 w-full lg:w-fit text-center"
              target="_blank"
            >
              View Resume
            </Link>
          </div>
        </motion.div>

        {/* Avatar Container: order 1 on mobile/tablet (top), col-span 4 on lg+ (right) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 lg:col-span-4 place-self-center relative w-[200px] sm:w-[300px] lg:max-w-[380px] aspect-square mx-auto flex-shrink-0"
        >
          <BorderGlow
            className="hero-avatar-border w-full h-full"
            borderRadius={4}
            animated
            backgroundColor="transparent"
            fillOpacity={0}
            colors={['#14b8a6', '#0ea5e9', '#3b82f6']}
          >
            <canvas ref={canvasRef} className="hero-avatar-canvas absolute inset-0 w-full h-full pointer-events-auto" />
          </BorderGlow>
        </motion.div>

      </div>

      {/* You are my Xth Visitor */}
      <div className="mt-1 sm:mt-0">
        <div className="hero-visitor-text flex flex-wrap items-center justify-center text-center gap-x-2">
          <span>You are my</span>
          <span className="hero-visitor-count inline-flex items-baseline">
            <SlotNumber value={VISITOR_COUNT} />
            <sup className="align-super ml-0.5">th</sup>
          </span>
          <span>visitor</span>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
