import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/letter-r.png';

export default function BadgeInteraction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pivotRef = useRef<HTMLDivElement>(null);
  const lanyardPathRef = useRef<SVGPathElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    velX: 0,
    velY: 0,
    rotationX: 0,
    rotationY: 0,
  });

  useEffect(() => {
    let animationFrameId: number;
    const spring = 0.1;
    const friction = 0.92;

    const updatePhysics = () => {
      const state = dragState.current;

      if (!isDragging) {
        // Return to center spring force
        const ax = -state.currentX * spring;
        const ay = -state.currentY * spring;

        state.velX += ax;
        state.velY += ay;

        state.velX *= friction;
        state.velY *= friction;

        state.currentX += state.velX;
        state.currentY += state.velY;

        // Rotation calculation based on position
        state.rotationY = state.currentX * 0.1;
        state.rotationX = -state.currentY * 0.05;
      }

      // Apply transforms
      if (pivotRef.current) {
        pivotRef.current.style.transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0) rotateY(${state.rotationY}deg) rotateX(${state.rotationX}deg)`;
      }

      // Update lanyard SVG path to look organic
      if (lanyardPathRef.current) {
        const controlPointX = 100 + state.currentX * 0.5;
        const badgeTopX = 100 + state.currentX;
        const badgeTopY = 150 + state.currentY;
        lanyardPathRef.current.setAttribute(
          'd',
          `M100,0 Q${controlPointX},75 ${badgeTopX},${badgeTopY}`
        );
      }

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    updatePhysics();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragState.current.startX = e.clientX - dragState.current.currentX;
    dragState.current.startY = e.clientY - dragState.current.currentY;
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const targetX = e.clientX - dragState.current.startX;
    const targetY = e.clientY - dragState.current.startY;

    // Clamping pull distance
    dragState.current.currentX = Math.max(Math.min(targetX, 150), -150);
    dragState.current.currentY = Math.max(Math.min(targetY, 150), -50);

    dragState.current.rotationY = dragState.current.currentX * 0.15;
    dragState.current.rotationX = -dragState.current.currentY * 0.1;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-[400px] flex justify-center items-start mb-4">
      <div
        id="badge-container"
        ref={containerRef}
        className="relative mt-8"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* SVG Lanyard */}
        <svg
          className="absolute -top-26 left-1/2 -translate-x-1/2 pointer-events-none overflow-visible"
          height="150"
          width="200"
        >
          <path id="lanyard" ref={lanyardPathRef} d="M100,0 Q100,75 100,150" />
        </svg>

        {/* The Badge Pivot */}
        <div id="badge-pivot" ref={pivotRef} className="badge-shadow">
          <div className="w-64 h-[380px] bg-white dark:bg-[#F4F4F5] rounded-xl overflow-hidden flex flex-col items-center shadow-2xl relative">
            {/* Card Top Clip Hole */}
            <div className="w-12 h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-4 mb-4"></div>

            {/* Profile Photo */}
            <div className="w-44 h-44 rounded-lg overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500 ring-4 ring-zinc-100 bg-slate-100 flex items-center justify-center">
              <img
                src={logo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Info */}
            <div className="text-center px-4 w-full">
              <h3 className="text-zinc-900 font-bold text-2xl uppercase tracking-tighter mb-1">
                Rizqi Setiawan
              </h3>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                Attendee | Software Developer
                <br />
                <span className='text-zinc-500 font-mono text-[10px] uppercase tracking-widest'>
                  Backend Enthusiast
                </span>
              </p>
            </div>

            {/* Badge Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-12 bg-primary flex items-center justify-center">
              <span className="text-on-primary font-mono text-[10px] font-bold tracking-[4px]">
                PORTFOLIO 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
