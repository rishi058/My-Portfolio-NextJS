"use client";
import React, { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import BorderGlow from "../border_glow/BorderGlow";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const HeroSection = () => {
  const [hovered, setHovered] = React.useState(false);
  const canvasRef = useRef(null);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * (500 - 400 + 1)) + 400;
    setVisitorCount(randomNum);
  }, []);

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

      {/* ── Mobile: stack avatar above text, both centered
           ── sm+:   12-col grid (avatar right, text left) ── */}

      {/* Mobile-only avatar (centered, exact square) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:hidden flex justify-center"
      >
        <div className="relative w-[180px] h-[180px] flex-shrink-0">
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
        </div>
      </motion.div>

      {/* sm+ grid layout */}
      <div className="hidden sm:grid sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-left justify-self-start"
        >
          <h1 className="hero-heading mb-4 sm:mb-6">
            <span className="hero-heading-gradient">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
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
          <p className="hero-description mb-5 sm:mb-8 max-w-2xl">
            🌱 I&apos;m currently learning core AI/ML.
            <br />
            <br />
            💬 Want to build something cool together? Let&apos;s connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:justify-start">
            <Link
              href="mailto:rishi.cs.dev@gmail.com"
              className="hero-cta-primary px-5 py-2.5 sm:px-6 sm:py-3 w-full sm:w-fit flex items-center justify-center min-w-[120px]"
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
              className="hero-cta-secondary px-5 py-2.5 sm:px-6 sm:py-3 w-full sm:w-fit text-center"
              target="_blank"
            >
              View Resume
            </Link>
          </div>
        </motion.div>

        {/* sm+ Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center relative w-full max-w-[300px] lg:max-w-[380px] aspect-square mx-auto"
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

      {/* Mobile-only text (below avatar) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:hidden text-center w-full"
      >
        <h1 className="hero-heading mb-3">
          <span className="hero-heading-gradient">
            Hello, I&apos;m{" "}
          </span>
          <br></br>
          <TypeAnimation
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
        <p className="hero-description mb-4 max-w-2xl mx-auto">
          🌱 I&apos;m currently learning core AI/ML.
          <br />
          <br />
          💬 Want to build something cool together? Let&apos;s connect!
        </p>
        <div className="flex flex-col gap-3 items-center">
          <Link
            href="mailto:rishi.cs.dev@gmail.com"
            className="hero-cta-primary px-5 py-2.5 w-full flex items-center justify-center"
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
            className="hero-cta-secondary px-5 py-2.5 w-full text-center"
            target="_blank"
          >
            View Resume
          </Link>
        </div>
      </motion.div>

      {/* You are my Xth Visitor */}
      <div className="mt-1 sm:mt-0">
        <div className="hero-visitor-text flex flex-wrap items-center justify-center text-center gap-x-2">
          <span>You are my</span>
          <span className="hero-visitor-count inline-flex items-baseline">
            <AnimatedNumbers
              includeComma
              animateToNumber={visitorCount}
              locale="en-US"
              configs={(_, index) => {
                return {
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                };
              }}
            />
            <sup className="align-super ml-0.5">th</sup>
          </span>
          <span>visitor</span>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
