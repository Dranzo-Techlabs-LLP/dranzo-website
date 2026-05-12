"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Line, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const NEON = "#3DFF6E";

function CoreShape() {
  const inner = useRef<THREE.Mesh>(null);
  const outer = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (inner.current) {
      inner.current.rotation.x += delta * 0.18;
      inner.current.rotation.y += delta * 0.22;
    }
    if (outer.current) {
      outer.current.rotation.x -= delta * 0.08;
      outer.current.rotation.y -= delta * 0.12;
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
      outer.current.scale.set(s, s, s);
    }
  });

  return (
    <group>
      <Icosahedron ref={inner} args={[1.1, 1]}>
        <meshStandardMaterial
          color={NEON}
          emissive={NEON}
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.85}
        />
      </Icosahedron>
      <Icosahedron ref={outer} args={[1.9, 1]}>
        <meshBasicMaterial color={NEON} wireframe transparent opacity={0.18} />
      </Icosahedron>
    </group>
  );
}

function OrbitRing({ radius = 2.6, tilt = 0, speed = 0.4, segments = 96 }: { radius?: number; tilt?: number; speed?: number; segments?: number }) {
  const ref = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      pts.push([Math.cos(t) * radius, 0, Math.sin(t) * radius]);
    }
    return pts;
  }, [radius, segments]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });

  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <Line points={points} color={NEON} lineWidth={1} transparent opacity={0.35} />
    </group>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const n = 400;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 4 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color={NEON} size={0.025} sizeAttenuation depthWrite={false} opacity={0.7} />
    </Points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6.2], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.4} color={NEON} />
      <pointLight position={[-6, -2, -4]} intensity={0.6} color="#ffffff" />

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
        <CoreShape />
      </Float>

      <OrbitRing radius={2.6} tilt={0.5} speed={0.35} />
      <OrbitRing radius={3.2} tilt={-0.4} speed={-0.22} />
      <OrbitRing radius={3.9} tilt={1.2} speed={0.16} />

      <ParticleField />
    </Canvas>
  );
}
