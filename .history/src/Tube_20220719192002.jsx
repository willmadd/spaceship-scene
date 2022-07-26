import { RoundedBox } from "@react-three/drei";
import React from "react";

const Tube = () => {
  return (
    <>
      <group>
        <mesh>
      <cylinderGeometry args={[0.25, 0.25, 1, 32]} position={[1,1,1]}/>
        <meshStandardMaterial color={"green"} />
      </mesh>
      <RoundedBox args={[0.40,0.40, 0.40]} radius={0.01}/>
      </group>
    </>
  );
};

export default Tube;
