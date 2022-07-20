import { RoundedBox } from "@react-three/drei";
import React from "react";

const Tube = () => {
  return (
    <>
      <group>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.2} position={[0, 1, 0]} />
        <mesh position={[0, 0.5, 2]}>
          <cylinderGeometry args={[0.25, 0.25, 1, 32]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.2} position={[0, 1, 2]} />
        <mesh position={[0, 0.5, 2]} rotate={[-Math.PI / 2, 0,0]}>
          <cylinderGeometry args={[0.25, 0.25, 1, 32]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </group>
    </>
  );
};

export default Tube;
