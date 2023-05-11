"use client";
import * as THREE from "three";
import { memo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const Planet = () => {
  const canvasRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Création de la caméra
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 900;

    // Création du rendu
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current?.appendChild(renderer.domElement);

    // Création de la lumière
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    // Création de la texture de la planète
    const planetTexture = new THREE.TextureLoader().load("/earth.jpg", () => {
      renderer.render(scene, camera);
    });

    // Création de la géométrie de la sphère
    const planetGeometry = new THREE.SphereGeometry(50, 32, 32);

    // Création du matériau de la sphère
    const planetMaterial = new THREE.MeshPhongMaterial({
      map: planetTexture,
      bumpMap: planetTexture,
      bumpScale: 0.1,
      specularMap: planetTexture,
      specular: new THREE.Color("grey"),
    });

    // Ajout de la sphère à la scène
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    const moon = new THREE.Mesh(planetGeometry, planetMaterial);

    moon.position.set(-100, -100, 0);
    planet.position.set(100, 100, 0);
    scene.add(planet);
    scene.add(moon);

    let planetAngle = 0;
    let moonAngle = 0;
    const planetDistance = 250;
    const moonDistance = 100;
    function animate() {
      requestAnimationFrame(animate);
      planetAngle += 0.005;
      planet.position.z = planetDistance * Math.cos(planetAngle);
      // planet.position.y = planetDistance * Math.sin(planetAngle);

      moonAngle += 0.01;
      moon.position.z = moonDistance * Math.cos(moonAngle) + planet.position.x;
      // moon.position.y = moonDistance * Math.sin(moonAngle) + planet.position.y;
      planet.rotation.y += 0.002;
      moon.rotation.y += 0.002;
      renderer.render(scene, camera);
    }

    animate();
    canvasRef.current?.addEventListener("wheel", (event: WheelEvent) => {
      if (event.deltaY > 0) {
        camera.position.z += 5;
      } else {
        camera.position.z -= 5;
      }
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 4 } }}
      ref={canvasRef}
      className="absolute top-0 w-screen"
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default memo(Planet);
