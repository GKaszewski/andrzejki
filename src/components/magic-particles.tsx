import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
}

export const MagicParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 20,
      size: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.1,
      fadeSpeed: Math.random() * 0.002 + 0.001,
    });

    for (let i = 0; i < 50; i++) {
      particles.push({
        ...createParticle(),
        y: Math.random() * canvas.height,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < 100 && Math.random() < 0.1) {
        particles.push(createParticle());
      }

      particles.forEach((p, index) => {
        p.y -= p.speedY;
        p.opacity -= p.fadeSpeed;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(250, 204, 21, ${p.opacity})`;
        ctx.fill();

        if (p.opacity <= 0 || p.y < -10) {
          particles.splice(index, 1);
          particles.push(createParticle());
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
};
