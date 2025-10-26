import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader } from 'three'
import { Text } from '@react-three/drei'

import reactLogo from './../../assets/3d-logos/react.png'
import reduxLogo from './../../assets/3d-logos/redux.png'
import jsLogo from './../../assets/3d-logos/javascript.png'
import tsLogo from './../../assets/3d-logos/typescript.jpg'
import htmlLogo from './../../assets/3d-logos/html.png'
import cssLogo from './../../assets/3d-logos/css.png'

export const RotatingBox = () => {
  const meshRefs = [
    useRef<Mesh>(null),
    useRef<Mesh>(null),
    useRef<Mesh>(null),
    useRef<Mesh>(null),
    useRef<Mesh>(null),
    useRef<Mesh>(null)
  ]

  const [isMobile] = useState(window.innerWidth <= 767)

  const reactTexture = useLoader(TextureLoader, reactLogo)
  const reduxTexture = useLoader(TextureLoader, reduxLogo)
  const jsTexture = useLoader(TextureLoader, jsLogo)
  const tsTexture = useLoader(TextureLoader, tsLogo)
  const htmlTexture = useLoader(TextureLoader, htmlLogo)
  const cssTexture = useLoader(TextureLoader, cssLogo)

  useFrame(() => {
    meshRefs.forEach((meshRef, index) => {
      const modifier = index % 2 === 0 ? 0.01 : -0.01
      if (meshRef.current) {
        meshRef.current.rotation.x += modifier
        meshRef.current.rotation.y += modifier
      }
    })
  })

  const desktopPositions: [number, number, number][] = [
    [-70, 60, 55],
    [-40, 60, 55],
    [-10, 60, 55],
    [20, 60, 55],
    [50, 60, 55],
    [80, 60, 55]
  ]

  const mobilePositions: [number, number, number][] = [
    [-40, 50, 0],
    [0, 50, 0],
    [40, 50, 0],
    [-40, 10, 0],
    [0, 10, 0],
    [40, 10, 0]
  ]

  const positions = isMobile ? mobilePositions : desktopPositions

  const textures = [
    reactTexture,
    reduxTexture,
    jsTexture,
    tsTexture,
    htmlTexture,
    cssTexture
  ]
  const colors = [
    'lightblue',
    'violet',
    'violet',
    'lightblue',
    'lightblue',
    'lightblue'
  ]
  const labels = ['React', 'Redux', 'JavaScript', 'TypeScript', 'HTML', 'CSS']

  return (
    <>
      {positions.map((position, index) => (
        <group position={position} key={index}>
          <mesh ref={meshRefs[index]}>
            <boxGeometry args={[13, 13, 13]} />
            <meshStandardMaterial color={colors[index]} map={textures[index]} />
          </mesh>
          <Text
            position={[0, isMobile ? -20 : -20, 0]}
            fontSize={5}
            anchorX="center"
            anchorY="middle"
          >
            {labels[index]}
          </Text>
        </group>
      ))}
    </>
  )
}
