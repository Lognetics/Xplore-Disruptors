"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BLUE = new THREE.Color("#2e7bff");
const CYAN = new THREE.Color("#22d3ee");
const VIOLET = new THREE.Color("#8b5cf6");

/** Points distributed evenly on a sphere (Fibonacci), coloured along a blue→violet ramp. */
function GlobePoints({ count = 2600, radius = 2 }: { count?: number; radius?: number }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const tmp = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      positions.set([x * radius, y * radius, z * radius], i * 3);
      // colour by latitude band
      const t = (y + 1) / 2;
      tmp.copy(BLUE).lerp(VIOLET, t).lerp(CYAN, Math.max(0, 1 - Math.abs(y)) * 0.4);
      colors.set([tmp.r, tmp.g, tmp.b], i * 3);
    }
    return { positions, colors };
  }, [count, radius]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Faint glowing latitude/longitude rings for structure. */
function Rings({ radius = 2 }: { radius?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
  });
  return (
    <group ref={ref}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.5, i * 0.7, 0]}>
          <torusGeometry args={[radius * 1.005, 0.004, 12, 120]} />
          <meshBasicMaterial color="#2e7bff" transparent opacity={0.25} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </group>
  );
}

/** Slow-drifting ambient particle field behind the globe. */
function Field({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p.set([(Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8 - 2], i * 3);
    }
    return p;
  }, [count]);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#6b7cff" transparent opacity={0.5} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function ParticleGlobe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <group rotation={[0.35, 0, 0.12]}>
        <GlobePoints />
        <Rings />
        {/* inner glow core */}
        <mesh>
          <sphereGeometry args={[1.97, 48, 48]} />
          <meshBasicMaterial color="#050a1e" transparent opacity={0.85} />
        </mesh>
      </group>
      <Field />
    </Canvas>
  );
}
