import { useEffect, useRef } from 'react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  pulseSpeed: number;
  pulsePhase: number;
  size: number;
}

interface Signal3D {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

export const GlobeRings = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let rotationY = 0;
    let rotationX = 0.2;
    let time = 0;

    // Generate static nodes on a sphere
    const nodeCount = 55;
    const nodes: Node3D[] = [];
    for (let i = 0; i < nodeCount; i++) {
      // Golden spiral distribution for uniform spherical coverage
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      // Spherical coordinates
      const r = 0.95 + Math.random() * 0.1; // slight variance in radius
      nodes.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.sin(theta),
        baseRadius: r,
        pulseSpeed: 1 + Math.random() * 2,
        pulsePhase: Math.random() * Math.PI * 2,
        size: 1.5 + Math.random() * 2.5,
      });
    }

    // Active signals traveling along the neural pathways
    const maxSignals = 15;
    const signals: Signal3D[] = [];

    // Helper to find neighboring nodes
    const getNeighbors = (index: number, maxCount = 4): number[] => {
      const distances = nodes.map((n, i) => {
        if (i === index) return { index: i, dist: Infinity };
        const dx = n.x - nodes[index].x;
        const dy = n.y - nodes[index].y;
        const dz = n.z - nodes[index].z;
        return { index: i, dist: Math.sqrt(dx * dx + dy * dy + dz * dz) };
      });
      distances.sort((a, b) => a.dist - b.dist);
      return distances.slice(0, maxCount).map((d) => d.index);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = `${parent.clientWidth}px`;
      canvas.style.height = `${parent.clientHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.38;

      ctx.clearRect(0, 0, w, h);

      time += 0.005;
      rotationY += 0.004; // rotate around Y axis
      rotationX = 0.15 + Math.sin(time * 0.5) * 0.05; // slowly wobble around X axis

      // Rotate nodes and store projected 2D coordinates + Z depth
      const projectedNodes = nodes.map((node) => {
        // Rotate around X
        const cosX = Math.cos(rotationX);
        const sinX = Math.sin(rotationX);
        let y1 = node.y * cosX - node.z * sinX;
        let z1 = node.y * sinX + node.z * cosX;

        // Rotate around Y
        const cosY = Math.cos(rotationY);
        const sinY = Math.sin(rotationY);
        let x2 = node.x * cosY + z1 * sinY;
        let z2 = -node.x * sinY + z1 * cosY;

        // Scale by sphere radius
        const finalR = radius * node.baseRadius;
        const x3 = x2 * finalR;
        const y3 = y1 * finalR;

        // Perspective factor based on depth (z2: -1 is back, +1 is front)
        const perspective = (z2 + 2) / 2; // 0.5 to 1.5

        return {
          x: cx + x3,
          y: cy + y3,
          z: z2,
          perspective,
          size: node.size * perspective,
          pulse: Math.sin(time * node.pulseSpeed + node.pulsePhase),
        };
      });

      // 1. Draw neural connection paths (synapses)
      // We only connect points that are close enough
      const maxDistance = 0.5; // normalized distance
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dz = n1.z - n2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const p1 = projectedNodes[i];
            const p2 = projectedNodes[j];

            // Opacity scales with distance and z-depth
            const baseOpacity = (1 - dist / maxDistance) * 0.18;
            const avgZ = (p1.z + p2.z) / 2;
            const depthOpacity = (avgZ + 1.2) / 2.2; // fade back connections
            const opacity = baseOpacity * depthOpacity;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            // Draw line with gradient or cyan glow
            ctx.strokeStyle = `rgba(0, 200, 255, ${opacity})`;
            ctx.lineWidth = 0.6 * ((avgZ + 1) / 2 + 0.4);
            ctx.stroke();
          }
        }
      }

      // 2. Manage and draw traveling signals
      // Spawn new signals
      if (signals.length < maxSignals && Math.random() < 0.08) {
        const fromIndex = Math.floor(Math.random() * nodeCount);
        const neighbors = getNeighbors(fromIndex);
        if (neighbors.length > 0) {
          const toIndex = neighbors[Math.floor(Math.random() * neighbors.length)];
          signals.push({
            fromIndex,
            toIndex,
            progress: 0,
            speed: 0.015 + Math.random() * 0.02,
          });
        }
      }

      // Update and draw signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i];
        sig.progress += sig.speed;

        if (sig.progress >= 1) {
          // Complete signal, spawn continuation occasionally
          if (Math.random() < 0.7) {
            const currentIdx = sig.toIndex;
            const neighbors = getNeighbors(currentIdx);
            if (neighbors.length > 0) {
              sig.fromIndex = currentIdx;
              sig.toIndex = neighbors[Math.floor(Math.random() * neighbors.length)];
              sig.progress = 0;
            } else {
              signals.splice(i, 1);
            }
          } else {
            signals.splice(i, 1);
          }
          continue;
        }

        const pStart = projectedNodes[sig.fromIndex];
        const pEnd = projectedNodes[sig.toIndex];

        // Interpolated position
        const sx = pStart.x + (pEnd.x - pStart.x) * sig.progress;
        const sy = pStart.y + (pEnd.y - pStart.y) * sig.progress;
        const sz = pStart.z + (pEnd.z - pStart.z) * sig.progress;

        const size = 2 * ((sz + 1.2) / 2.2);

        // Draw signal dot
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'var(--zarnex-cyan)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        // Draw faint trailing pulse path
        ctx.beginPath();
        ctx.moveTo(pStart.x, pStart.y);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // 3. Draw neuron nodes (glowing synapse junctions)
      projectedNodes.forEach((node) => {
        // Pulse size and alpha
        const pulseFactor = 0.3 + 0.7 * ((node.pulse + 1) / 2);
        const nodeAlpha = (0.35 + 0.65 * ((node.z + 1.1) / 2.1)) * (0.6 + 0.4 * pulseFactor);

        // Node Glow
        ctx.save();
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.size * 3.5
        );
        gradient.addColorStop(0, `rgba(0, 200, 255, ${0.45 * nodeAlpha})`);
        gradient.addColorStop(0.3, `rgba(0, 150, 255, ${0.15 * nodeAlpha})`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Inner solid core
        ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * nodeAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.75, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 4. Outer orbital rings matching the reference HUD glow lines
      const drawHUDOrbit = (
        rx: number,
        ry: number,
        rot: number,
        speed: number,
        dashed = false
      ) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);

        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);

        if (dashed) {
          ctx.setLineDash([4, 12]);
          ctx.lineDashOffset = time * speed * 40;
        }

        ctx.strokeStyle = 'rgba(0, 200, 255, 0.12)';
        ctx.lineWidth = 1.0;
        ctx.stroke();
        ctx.restore();
      };

      // Tilted primary rings
      drawHUDOrbit(radius * 1.06, radius * 0.32, -0.2, 1, true);
      drawHUDOrbit(radius * 1.02, radius * 0.68, 0.4, -0.8, true);

      // Draw horizontal target-like boundary ring
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius * 1.15, radius * 0.22, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.08)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default GlobeRings;
