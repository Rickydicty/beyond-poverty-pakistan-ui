
import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

export function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Create scene elements with useMemo to avoid recreating them on every render
  const sceneObjects = useMemo(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 500;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    return { scene, camera, renderer };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const { scene, camera, renderer } = sceneObjects;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Clear existing objects from the scene
    while(scene.children.length > 0) { 
      scene.remove(scene.children[0]); 
    }

    // Create star material that respects the theme
    const starMaterial = new THREE.PointsMaterial({
      color: theme === 'dark' ? 0xFFFFFF : 0x0F3D27,
      size: 0.5,
      transparent: true,
      opacity: theme === 'dark' ? 0.8 : 0.3,
    });

    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starsVertices = [];
    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;
      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, [theme, sceneObjects]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}
