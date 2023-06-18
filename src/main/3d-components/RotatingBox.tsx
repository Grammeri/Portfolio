import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Box } from "@material-ui/core";

const RotatingBox = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={meshRef}>
      <meshStandardMaterial color="orange" />
    </Box>
  );
};
