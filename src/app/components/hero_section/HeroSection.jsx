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
    <section className="h-full w-full flex flex-col justify-evenly py-4 lg:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-on-surface mb-6 text-[38px] md:text-[54px] font-headline-lg font-bold leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
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
            />
          </h1>
          <p className="text-on-surface-variant text-body-lg font-body-lg mb-8 max-w-2xl leading-relaxed">
            🌱 I&apos;m currently learning core AI/ML.
            <br />
            <br />
            💬 Want to build something cool together? Let&apos;s connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-start">
            <Link
              href="mailto:rishi.cs.dev@gmail.com"
              className="px-6 py-3 w-full sm:w-fit rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.25)] text-center text-label-sm min-w-[120px]"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {hovered ? "rishi.cs.dev@gmail.com" : "Hire Me"}
            </Link>
            <Link
              href={'https://drive.google.com/file/d/18Fof1b0Gwl4E2YnVQk5xIGLkc3N5XwP4/view'}
              className="px-6 py-3 w-full sm:w-fit rounded-lg bg-surface text-on-surface font-medium border border-outline hover:bg-on-background/5 transition-all duration-200 text-center text-label-sm"
              target="_blank"
            >
              View Resume
            </Link>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] aspect-square"
        >
          <BorderGlow
            className="w-full h-full shadow-lg"
            borderRadius={4}
            animated
            backgroundColor="transparent"
            fillOpacity={0}
            colors={['#14b8a6', '#0ea5e9', '#3b82f6']}
          >
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-auto rounded-2xl overflow-hidden" />
          </BorderGlow>
        </motion.div>

      </div>

      {/* You are my Xth Visitor */}
      <div className="mt-0">
        <p className="flex flex-wrap items-center justify-center text-center gap-x-2 text-2xl sm:text-3xl font-bold text-on-surface-variant">
          <span>You are my</span>
          <span className="inline-flex items-baseline text-primary">
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
        </p>
      </div>

    </section>
  );
};

export default HeroSection;
