import { RoundedBox } from "@react-three/drei";
import React from "react";

const Tube = () => {
  return (
    <>
      <group>
        <mesh position={[1,0,1]}>
      <cylinderGeometry args={[0.25, 0.25, 1, 32]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <RoundedBox args={[0.40,0.40, 0.40]} radius={0.01}/>
      </group>
    </>
  );
};

export default Tube;