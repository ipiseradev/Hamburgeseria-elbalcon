"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Embers() {
  const group = useRef<THREE.Group>(null);

  const particles = useRef(
    Array.from({ length: 18 }, () => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 3,
      ] as [number, number, number],
      scale: 0.04 + Math.random() * 0.09,
      speed: 0.15 + Math.random() * 0.25,
      offset: Math.random() * Math.PI * 2,
    }))
  ).current;

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.08;
    group.current.children.forEach((mesh, i) => {
      const p = particles[i];
      mesh.position.y = p.position[1] + Math.sin(state.clock.elapsedTime * p.speed + p.offset) * 0.4;
      mesh.position.x = p.position[0] + Math.cos(state.clock.elapsedTime * p.speed * 0.6 + p.offset) * 0.2;
    });
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position} scale={p.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#f0c05f" : "#c2451c"}
            emissive={i % 2 === 0 ? "#f0c05f" : "#c2451c"}
            emissiveIntensity={1.4}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="pointer-events-none"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 4]} intensity={40} color="#f0c05f" />
      <Embers />
    </Canvas>
  );
}
