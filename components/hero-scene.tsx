'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function BlueprintSolid() {
  const group = useRef<THREE.Group>(null)
  const pointer = useRef({ x: 0, y: 0 })

  const outer = useMemo(() => new THREE.IcosahedronGeometry(2.15, 1), [])
  const outerEdges = useMemo(() => new THREE.EdgesGeometry(outer), [outer])
  const innerEdges = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1.15, 0)
    return new THREE.EdgesGeometry(geo)
  }, [])

  useFrame((state, delta) => {
    pointer.current.x = state.pointer.x
    pointer.current.y = state.pointer.y
    if (group.current) {
      group.current.rotation.y += delta * 0.12
      group.current.rotation.x += delta * 0.035
      // subtle parallax toward the cursor
      group.current.position.x = THREE.MathUtils.lerp(
        group.current.position.x,
        pointer.current.x * 0.25,
        0.04,
      )
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        pointer.current.y * 0.2,
        0.04,
      )
    }
  })

  return (
    <group ref={group}>
      <lineSegments geometry={outerEdges}>
        <lineBasicMaterial color="#38a9e8" transparent opacity={0.65} />
      </lineSegments>
      <points geometry={outer}>
        <pointsMaterial color="#38bdf8" size={0.07} sizeAttenuation />
      </points>
      <lineSegments geometry={innerEdges}>
        <lineBasicMaterial color="#64748b" transparent opacity={0.4} />
      </lineSegments>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <BlueprintSolid />
    </Canvas>
  )
}
