import { MeshReflectorMaterial } from "@react-three/drei";
import React from "react";

const Ground = () => {
  console.log("hi");
  return (
    <mesh>
      <planeBufferGeometry rotation={[-Math.PI * 0.5, 0, 0]} castShadow receiveShadow args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]}
        mixBlur={30}
        mixStrength={80}
        mixContract={1}
        resolution={1024}
        mirror={1}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        debug={0}
        reflectorOffset={0.1}
      />
      {/* <meshStandardMaterial color={'red'}/> */}
    </mesh>
  );
};

export default Ground;
