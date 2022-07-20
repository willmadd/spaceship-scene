import { MeshReflectorMaterial } from "@react-three/drei";
import React from "react";

const Ground = () => {
  console.log("hi");
  return (
    <mesh>
      <planeBufferGeometry rotation={[Math.PI * 0.5, 0, 0]} castShadow receiveShadow args={[30, 30]} />
      <MeshReflectorMaterial envMapIntensity={0} dithering={true} color={[0.015, 0.015, 0.015]} roughness={0.7} blur={[1000, 400]} mirror={false}/>
      {/* <meshStandardMaterial color={'red'}/> */}
    </mesh>
  );
};

export default Ground;
