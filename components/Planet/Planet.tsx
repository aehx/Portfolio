"use client";
import * as THREE from "three";
import { memo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const Planet = ({ isInactive }: { isInactive: any }) => {
  const canvasRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    console.log("effect");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    let animationId: null | number = null;
    camera.position.z = 800;
    scene.background = new THREE.Color(0, 0, 0);

    // Création du rendu
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current?.appendChild(renderer.domElement);

    // Création de la lumière
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(100, 100, -100);
    scene.add(light);

    // Création de la texture de la planète
    const roughnessTexture = new THREE.TextureLoader().load("/pic_t.jpg");
    const planetTexture = new THREE.TextureLoader().load("/pic.jpg", () => {
      renderer.render(scene, camera);
    });
    const moonTexture = new THREE.TextureLoader().load("/moon.jpg", () => {
      renderer.render(scene, camera);
    });

    // Création de la géométrie de la sphère
    const planetGeometry = new THREE.SphereGeometry(50, 32, 32);
    const moonGeometry = new THREE.SphereGeometry(25, 16, 16);

    // Création du matériau de la sphère
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture,
      bumpMap: planetTexture,
      bumpScale: 2,
      roughnessMap: roughnessTexture,
    });
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: moonTexture,
      bumpMap: moonTexture,
      bumpScale: 0.1,
      roughnessMap: roughnessTexture,
    });

    // Ajout de la sphère à la scène
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    scene.add(planet);
    scene.add(moon);

    const planetDistance = 50;
    const moonDistance = 70;
    const planetSpeed = 0.09;
    const planetRotationSpeed = 0.002;
    const moonSpeed = 0.09;
    const moonRotationSpeed = 0.001;

    const deviceWidthX =
      window.innerWidth > 1400
        ? 300
        : window.innerWidth >= 1199
        ? 200
        : window.innerWidth > 420
        ? 30
        : 20;
    const deviceWidthY = window.innerWidth < 420 ? 180 : 0;
    function animate() {
      console.log("animate");
      animationId = requestAnimationFrame(animate);
      const time = performance.now() * 0.001;
      const planetAngle = time * planetSpeed;
      // Mouvement de la planète
      const planetX = Math.cos(planetAngle) * planetDistance - deviceWidthX;
      const planetY = Math.sin(planetAngle) * planetDistance - deviceWidthY;
      planet.position.set(planetX, planetY, 0);
      planet.rotation.y += planetRotationSpeed;

      // Mouvement de la Lune
      const moonAngle = time * moonSpeed;
      const moonX = Math.cos(moonAngle) * moonDistance + planetX;
      const moonY = Math.sin(moonAngle) * moonDistance + planetY;
      moon.position.set(moonX, moonY, 100);
      moon.rotation.y += moonRotationSpeed;
      renderer.render(scene, camera);
    }
    if (!isInactive) {
      animate();
    }
    canvasRef.current?.addEventListener("wheel", (event: WheelEvent) => {
      if (event.deltaY > 0) {
        if (camera.position.z <= 950) camera.position.z += 5;
      } else {
        camera.position.z -= 5;
      }
    });
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isInactive]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 4 } }}
      ref={canvasRef}
      className="absolute top-0"
    />
  );
};

export default memo(Planet);
