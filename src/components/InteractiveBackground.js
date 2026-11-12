import { useEffect, useRef, useState } from "react";

/** A bounded canvas field: pointer input stays out of React's render loop. */
export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let width = 0;
    let height = 0;
    let points = [];
    let frame = 0;
    let lastFrame = 0;
    let time = 0;
    let running = false;
    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
      opacity: 0,
    };

    const draw = (animated) => {
      context.clearRect(0, 0, width, height);
      if (animated) {
        pointer.x += (pointer.targetX - pointer.x) * 0.12;
        pointer.y += (pointer.targetY - pointer.y) * 0.12;
        pointer.opacity += ((pointer.active ? 1 : 0) - pointer.opacity) * 0.07;
      }
      if (animated && pointer.opacity > 0.01) {
        const glow = context.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          350,
        );
        glow.addColorStop(0, `rgba(53, 211, 177, ${0.2 * pointer.opacity})`);
        glow.addColorStop(
          0.45,
          `rgba(59, 114, 197, ${0.1 * pointer.opacity})`,
        );
        glow.addColorStop(1, "rgba(59, 114, 197, 0)");
        context.fillStyle = glow;
        context.fillRect(0, 0, width, height);
      }
      const positions = points.map((p) => {
        let x = p.x + (animated ? Math.sin(time * 0.00015 + p.phase) * 16 : 0);
        let y = p.y + (animated ? Math.cos(time * 0.00012 + p.phase) * 13 : 0);
        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (animated && distance < 180 && distance > 0) {
          const push = (1 - distance / 180) * 25 * pointer.opacity;
          x += (dx / distance) * push;
          y += (dy / distance) * push;
        }
        return {
          x,
          y,
          size: p.size,
          near: animated && distance < 240 && pointer.opacity > 0.1,
        };
      });
      positions.forEach((p, index) => {
        context.beginPath();
        context.arc(p.x, p.y, p.near ? p.size + 0.5 : p.size, 0, Math.PI * 2);
        context.fillStyle = p.near
          ? `rgba(136, 244, 211, ${0.75 * pointer.opacity})`
          : "rgba(158, 182, 211, 0.38)";
        context.fill();
        for (let j = index + 1; j < positions.length; j += 1) {
          const other = positions[j];
          const distance = Math.hypot(p.x - other.x, p.y - other.y);
          if (distance < 130) {
            context.beginPath();
            context.moveTo(p.x, p.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(115, 226, 190, ${(1 - distance / 130) * (p.near ? 0.5 : 0.12)})`;
            context.lineWidth = 0.65;
            context.stroke();
          }
        }
      });
    };
    const animate = (timestamp) => {
      if (!running) return;
      // 30 fps is sufficient for this decorative layer.
      if (timestamp - lastFrame >= 32) {
        time += Math.min(timestamp - lastFrame, 50);
        lastFrame = timestamp;
        draw(true);
      }
      frame = window.requestAnimationFrame(animate);
    };
    const sync = () => {
      window.cancelAnimationFrame(frame);
      running =
        !paused &&
        !reducedMotion.matches &&
        finePointer.matches &&
        !document.hidden;
      canvas.dataset.motion = running ? "active" : "static";
      if (running) {
        lastFrame = performance.now();
        frame = window.requestAnimationFrame(animate);
      } else {
        pointer.opacity = 0;
        draw(false);
      }
    };
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(
        78,
        Math.max(22, Math.round((width * height) / 18000)),
      );
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        phase: Math.random() * Math.PI * 2,
        size: Math.random() * 0.8 + 0.6,
      }));
      sync();
    };
    const move = (event) => {
      if (event.pointerType === "touch") return;
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      if (!pointer.active) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
      }
      pointer.active = true;
    };
    const leave = () => {
      pointer.active = false;
    };
    const out = (event) => {
      if (!event.relatedTarget) leave();
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", out, { passive: true });
    window.addEventListener("blur", leave);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", sync);
    reducedMotion.addEventListener("change", sync);
    finePointer.addEventListener("change", sync);
    resize();
    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", out);
      window.removeEventListener("blur", leave);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", sync);
      reducedMotion.removeEventListener("change", sync);
      finePointer.removeEventListener("change", sync);
    };
  }, [paused]);

  return (
    <>
      <div className="ambient-background" aria-hidden="true">
        <canvas ref={canvasRef} />
      </div>
      <button
        className="motion-toggle"
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>{" "}
        {paused ? "Resume background" : "Pause background"}
      </button>
    </>
  );
}
