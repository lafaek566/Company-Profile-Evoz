import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useAnimations, useFBX } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";

function AnimatedAnt({ onLoaded }) {
  const group = useRef();
  const fbx = useFBX("/assets/ant/source/ant.fbx");

  // Load textures
  const textures = useLoader(TextureLoader, [
    "/assets/ant/textures/1.jpg",
    "/assets/ant/textures/2.png",
    "/assets/ant/textures/3.jpg",
    "/assets/ant/textures/4.jpg",
  ]);

  const { animations } = fbx;
  const { actions } = useAnimations(animations, group);

  // Play all animations
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().fadeIn(1).play();
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.clampWhenFinished = true;
        action.enabled = true;
      });
    }
  }, [actions]);

  // Apply textures & replace material with MeshStandardMaterial to support lighting & textures properly
  useEffect(() => {
    if (fbx && textures.length > 0) {
      let i = 0;
      fbx.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: textures[i % textures.length],
            roughness: 0.4, // buat material lebih realistis
            metalness: 0.1, // sedikit metalik agar refleksi lebih natural
          });
          child.material.map.encoding = THREE.sRGBEncoding; // Correct color space
          child.material.needsUpdate = true;
          i++;
        }
      });
      onLoaded(); // notify parent loading finished
    }
  }, [fbx, textures, onLoaded]);

  return (
    <primitive
      ref={group}
      object={fbx}
      scale={0.00035}
      position={[1, -2.4, -0.05]}
      castShadow
      receiveShadow
    />
  );
}

function MovingLights() {
  const pointLightRef = useRef();
  const spotLightRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (pointLightRef.current) {
      pointLightRef.current.position.x = Math.sin(t) * 5;
      pointLightRef.current.position.z = Math.cos(t) * 5;
      pointLightRef.current.position.y = 2 + Math.sin(t * 2) * 1;
    }

    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(t * 0.5) * 2;
      spotLightRef.current.position.y = 6 + Math.sin(t * 3) * 0.5;
      spotLightRef.current.position.z = 2;
    }
  });

  return (
    <>
      <pointLight
        ref={pointLightRef}
        intensity={5}
        distance={10}
        color="#00aaff"
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
      <spotLight
        ref={spotLightRef}
        intensity={2.5}
        angle={0.3}
        penumbra={0.5}
        position={[0, 6, 2]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
}

export default function Model3D() {
  const [loading, setLoading] = useState(true);

  function handleModelLoaded() {
    setLoading(false);
  }

  return (
    <>
      {loading && (
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            color: "#fff",
            zIndex: 100,
          }}
        >
          Loading 3D Model...
        </div>
      )}

      <div
        className="w-full h-full"
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        <Canvas
          shadows
          camera={{ position: [5, 2, 5], fov: 45 }}
          gl={{ outputEncoding: THREE.sRGBEncoding }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[3, 15, 7]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight position={[-5, 5, -5]} intensity={0.5} />
          <Suspense fallback={null}>
            <AnimatedAnt onLoaded={handleModelLoaded} />
            <MovingLights />
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </>
  );
}
