import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/** Soft drifting dots above the CSS grid — subtle motion, easy on the eyes. */
export default function ParticleBackground({
  clearColor = 0x060a12,
  fogColor = 0x060a12,
  fogDensity = 0.00088,
  particleColor = 0x93c5fd,
  particleCount = 2000,
  particleSize = 2.75,
  spread = 1400,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(fogColor, fogDensity);

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 280;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(clearColor, 1);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * spread;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
      size: particleSize,
      color: particleColor,
      transparent: true,
      opacity: 0.78,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let frameId;
    function animate() {
      if (!reducedMotion) {
        particlesMesh.rotation.y += 0.00085;
        particlesMesh.rotation.x += 0.00035;
      }
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [clearColor, fogColor, fogDensity, particleColor, particleCount, particleSize, spread]);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
