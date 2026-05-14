"use client";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./Vision.module.css";

const targets = [20, 800, 500, 100];
const durations = [2000, 3000, 2500, 2000]; // Different durations for each counter

function VisionCounter() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const counterRef = useRef(null);

  useEffect(() => {
    const node = counterRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targets.forEach((target, index) => {
              const duration = durations[index];
              const startTime = Date.now();
              const startValue = 0;
              const endValue = target;

              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentValue = Math.floor(progress * endValue);

                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = currentValue;
                  return newCounts;
                });

                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              };

              animate();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div className="container" ref={counterRef}>
      <div
        className={`${Styles.counterRow} grid grid-cols-2 md:grid-cols-4 gap-8`}
      >
        <div className="text-center">
          <h2>{counts[0]}+</h2>
          <p>Years of Foundation</p>
        </div>
        <div className="text-center">
          <h2>{counts[1]}+</h2>
          <p>Members</p>
        </div>
        <div className="text-center">
          <h2>{counts[2]}+</h2>
          <p>Charitable Initiatives</p>
        </div>
        <div className="text-center">
          <h2>{counts[3]}+</h2>
          <p>Successful Medical Missions</p>
        </div>
      </div>
    </div>
  );
}

export default VisionCounter;
