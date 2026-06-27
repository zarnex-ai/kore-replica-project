import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ModelViewerProps {
  modelPath: string;
  className?: string;
}

export const ModelViewer = ({ modelPath, className = '' }: ModelViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null; // transparent

    // Camera - Fixed camera so spotlight and background HUD disks remain stationary
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0.4, 3.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.8;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights — strong multi-directional setup so model colors are vivid
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);

    // Hemisphere light for natural sky/ground fill
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.8);
    hemiLight.position.set(0, 10, 0);
    scene.add(hemiLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 3.0);
    mainLight.position.set(5, 8, 5);
    scene.add(mainLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 2.0);
    frontLight.position.set(0, 2, 8);
    scene.add(frontLight);

    const leftLight = new THREE.DirectionalLight(0xffffff, 1.5);
    leftLight.position.set(-6, 3, 2);
    scene.add(leftLight);

    const rightLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rightLight.position.set(6, 3, 2);
    scene.add(rightLight);

    const bottomLight = new THREE.DirectionalLight(0xffffff, 1.0);
    bottomLight.position.set(0, -5, 3);
    scene.add(bottomLight);

    const backLight = new THREE.DirectionalLight(0x88ccff, 1.0);
    backLight.position.set(0, 3, -6);
    scene.add(backLight);

    // Holographic spotlight platform floor disks under the model (STATIONARY)
    const circleGroup = new THREE.Group();
    circleGroup.position.y = -0.65;

    // Spotlight pointing at the model from bottom up (STATIONARY, relative to platform Y=-0.65)
    const spotlight = new THREE.SpotLight(0x8ce0ff, 26, 6, Math.PI / 4, 0.4, 0.5);
    spotlight.position.set(0, -1.85, 0); // Y relative to circleGroup (absolute Y is -2.5)
    spotlight.target.position.set(0, 0.65, 0); // pointing straight up relative to circleGroup
    circleGroup.add(spotlight);
    circleGroup.add(spotlight.target);

    // 1. Raised metallic 3D cylinder platform base
    const platformGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.04, 64);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x070b12,
      roughness: 0.12,
      metalness: 0.96,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -0.02; // center of cylinder base
    circleGroup.add(platform);

    // 2. Bright glowing top rim ring (Light-blue)
    const rimGeo = new THREE.RingGeometry(0.835, 0.85, 64);
    const rimMat = new THREE.MeshBasicMaterial({
      color: 0x8ce0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.001; // flush with top of the platform
    circleGroup.add(rim);

    // 3. Central bright projector lens (White core + Light-blue outer glow)
    const lensCenterGeo = new THREE.RingGeometry(0, 0.12, 32);
    const lensCenterMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const lensCenter = new THREE.Mesh(lensCenterGeo, lensCenterMat);
    lensCenter.rotation.x = Math.PI / 2;
    lensCenter.position.y = 0.002;
    circleGroup.add(lensCenter);

    const lensGlowGeo = new THREE.RingGeometry(0.12, 0.28, 32);
    const lensGlowMat = new THREE.MeshBasicMaterial({
      color: 0x8ce0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7
    });
    const lensGlow = new THREE.Mesh(lensGlowGeo, lensGlowMat);
    lensGlow.rotation.x = Math.PI / 2;
    lensGlow.position.y = 0.002;
    circleGroup.add(lensGlow);


    // 5. Concentric coordinate thin rings on the floor extending outwards (Light-blue)
    const addFloorRing = (r1: number, r2: number, opacity: number) => {
      const geo = new THREE.RingGeometry(r1, r2, 64);
      const mat = new THREE.MeshBasicMaterial({
        color: 0x8ce0ff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: opacity
      });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -0.02; // ground level
      circleGroup.add(ring);
    };

    addFloorRing(1.05, 1.06, 0.14);
    addFloorRing(1.25, 1.26, 0.08);
    addFloorRing(1.5, 1.515, 0.04);

    scene.add(circleGroup);

    // Load Model
    let model: THREE.Group | null = null;
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf: { scene: THREE.Group }) => {
        model = gltf.scene;

        // Center and scale model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 1.45 / maxDim;

        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));
        model.position.y += 0.35;

        scene.add(model);
      },
      undefined,
      (error: Error) => {
        console.error('Error loading 3D model:', error);
      }
    );

    // Custom Drag / Rotation Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      container.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;

      // Restrict vertical rotation to avoid flipping upside down
      targetRotationX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, targetRotationX));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUpOrLeave = () => {
      isDragging = false;
      container.style.cursor = 'grab';
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUpOrLeave);
    container.style.cursor = 'grab';

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (model) {
        if (isDragging) {
          // Dragging: Lerp rotation to match mouse movements
          currentRotationX += (targetRotationX - currentRotationX) * 0.15;
          currentRotationY += (targetRotationY - currentRotationY) * 0.15;
          model.rotation.x = currentRotationX;
          model.rotation.y = currentRotationY;
        } else {
          // Released: return to baseline X (0) and auto-spin on Y with scroll rotation factor
          targetRotationX += (0 - targetRotationX) * 0.05;
          currentRotationX += (targetRotationX - currentRotationX) * 0.15;
          
          // Apply organic scroll wobble to X rotation
          const scrollWobble = Math.sin(window.scrollY * 0.004) * 0.12;
          model.rotation.x = currentRotationX + scrollWobble;

          // Return Z to 0
          model.rotation.z += (0 - model.rotation.z) * 0.08;

          // Spin on Y plus scroll-linked rotation
          targetRotationY += 0.008;
          currentRotationY += (targetRotationY - currentRotationY) * 0.1;
          
          const scrollRotation = window.scrollY * 0.0025;
          model.rotation.y = currentRotationY + scrollRotation;
        }
      }

      // Counter-scroll translation for circleGroup to keep spotlight platform stationary on right column
      const scrollProgress = Math.min(1.0, window.scrollY / 480);
      const isDesktopWidth = window.innerWidth >= 1024;
      circleGroup.position.x = isDesktopWidth ? scrollProgress * 1.04 : 0;
      circleGroup.scale.setScalar(isDesktopWidth ? 1.0 / (1.0 + scrollProgress * 0.30) : 1.0);

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUpOrLeave);
      renderer.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelPath]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
};

export default ModelViewer;
