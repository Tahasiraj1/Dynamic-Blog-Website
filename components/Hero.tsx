"use client";

import React from "react";
import Image from "next/image";
import { GradientBlob } from "./ui/GradientBlob";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const middleImageRef = useRef(null);

  const { scrollYProgress: leftScrollProgress } = useScroll({
    target: leftImageRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: rightScrollProgress } = useScroll({
    target: rightImageRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: middleScrollProgress } = useScroll({
    target: middleImageRef,
    offset: ["start end", "end start"],
  });

  const leftImageX = useTransform(
    leftScrollProgress,
    [0.2, 0.5],
    ["0%", "-90%"]
  );

  const scaleTransform = useTransform(
    middleScrollProgress,
    [0.2, 0.4],
    [1, 0.9]
  );

  const rightImageX = useTransform(
    rightScrollProgress,
    [0.2, 0.5],
    ["0%", "90%"]
  );

  return (
    <div
      ref={containerRef}
      className="relative flex-col items-center justify-center p-10 overflow-x-clip"
    >
      <div className="absolute -top-20 -left-40 opacity-50 -z-10">
        <GradientBlob colors={["#FF00A9", "#00F0FF"]} size={500} blur={60} />
      </div>
      <div className="absolute -top-20 right-[500px] opacity-50 -z-10">
        <GradientBlob colors={["#FF00A9", "#00F0FF"]} size={500} blur={60} />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        <span className="text-fuchsia-700">Empower Your Code</span>
        <br /> Tips, Tricks, and Insights for Programmers
      </h1>
      <p className="text-lg text-center mt-6">
        Learn how to write better code, faster, and with fewer bugs
      </p>
      <div className="flex items-center justify-center mt-20 space-x-2 relative">
        <motion.div
          className="rounded-lg aspect-square overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.2,
          }}
          style={{ x: leftImageX }}
        >
          <Image
            src="/images/binary-6285217.jpg"
            alt="Hero Image"
            width={400}
            height={500}
            className="rounded-lg aspect-square w-[150px] h-[200px] md:w-[400px] md:h-[500px] "
          />
        </motion.div>
        <motion.div
          className="absolute rounded-lg aspect-square overflow-hidden z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.2,
          }}
          style={{ scale: scaleTransform }}
        >
          <Image
            src="/images/rahul-mishra-glmeeU0zabw-unsplash.jpg"
            alt="Hero Image"
            width={440}
            height={550}
            className="rounded-lg aspect-square  w-[160px] h-[210px] md:w-[440px] md:h-[550px]"
          />
        </motion.div>
        <motion.div
          className="rounded-lg aspect-square overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.2,
          }}
          style={{ x: rightImageX }}
        >
          <Image
            src="/images/pass2.jpg"
            alt="Hero Image"
            width={400}
            height={500}
            className="rounded-lg aspect-square w-[150px] h-[200px] md:w-[400px] md:h-[500px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
