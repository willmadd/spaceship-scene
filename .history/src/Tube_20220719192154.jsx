import { RoundedBox } from "@react-three/drei";
import React from "react";

const Tube = () => {
  return (
    <>
      <group>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.25, 1.25, 1, 32]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.2} position={[0, 1, 0]} />
      </group>
    </>
  );
};

export default Tube;
