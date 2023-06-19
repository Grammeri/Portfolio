import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React, { useRef } from "react";
import reactLogo from "./../../assets/3d-logos/react.png";
import reduxLogo from "./../../assets/3d-logos/redux.png";
import jsLogo from "./../../assets/3d-logos/javascript.png";
import tsLogo from "./../../assets/3d-logos/typescript.jpg";
import htmlLogo from "./../../assets/3d-logos/html.png";
import cssLogo from "./../../assets/3d-logos/css.png";

export const RotatingBox = () => {
  const meshRef1 = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);
  const meshRef4 = useRef<THREE.Mesh>(null);
  const meshRef5 = useRef<THREE.Mesh>(null);
  const meshRef6 = useRef<THREE.Mesh>(null);

  // Load textures
  const reactTexture = useLoader(TextureLoader, reactLogo);
  const reduxTexture = useLoader(TextureLoader, reduxLogo);
  const jsTexture = useLoader(TextureLoader, jsLogo);
  const tsTexture = useLoader(TextureLoader, tsLogo);
  const htmlTexture = useLoader(TextureLoader, htmlLogo);
  const cssTexture = useLoader(TextureLoader, cssLogo);

  // Rotation logic
  useFrame(() => {
    if (meshRef1.current) {
      meshRef1.current.rotation.x += 0.01;
      meshRef1.current.rotation.y += 0.01;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x -= 0.01;
      meshRef2.current.rotation.y -= 0.01;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.x += 0.01;
      meshRef3.current.rotation.y += 0.01;
    }
    if (meshRef4.current) {
      meshRef4.current.rotation.x -= 0.01;
      meshRef4.current.rotation.y -= 0.01;
    }
    if (meshRef5.current) {
      meshRef5.current.rotation.x += 0.01;
      meshRef5.current.rotation.y += 0.01;
    }
    if (meshRef6.current) {
      meshRef6.current.rotation.x -= 0.01;
      meshRef6.current.rotation.y -= 0.01;
    }
  });

  return (
    <>
      <mesh ref={meshRef1} position={[-70, 45, 55]}>
        <boxBufferGeometry args={[13, 13, 13]} />
        <meshStandardMaterial color={"lightblue"} map={reactTexture} />
      </mesh>

      <mesh ref={meshRef2} position={[-40, 45, 55]}>
        <boxBufferGeometry args={[13, 13, 13]} />
        <meshStandardMaterial color={"violet"} map={reduxTexture} />
      </mesh>

      <mesh ref={meshRef3} position={[-10, 45, 55]}>
        <boxBufferGeometry args={[13, 13, 13]} />
        <meshStandardMaterial color={"violet"} map={jsTexture} />
      </mesh>

      <mesh ref={meshRef4} position={[20, 45, 55]}>
        <boxBufferGeometry args={[13, 13, 13]} />
        <meshStandardMaterial color={"lightblue"} map={tsTexture} />
      </mesh>

      <mesh ref={meshRef5} position={[50, 45, 55]}>
        <boxBufferGeometry args={[13, 13, 13]} />
        <meshStandardMaterial color={"lightblue"} map={htmlTexture} />
      </mesh>

      <mesh ref={meshRef6} position={[80, 45, 55]}>
        <boxBufferGeometry args={[13, 13, 13]} />
        <meshStandardMaterial color={"lightblue"} map={cssTexture} />
      </mesh>
    </>
  );
};
