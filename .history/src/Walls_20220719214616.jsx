import React from "react";

const Walls = () => {
  return (
    <group>
      <mesh position={[0,0,-5]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <mesh rotation={[0,Math.PI/2,0]} position={[-5,0,0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </group>
  );
};

export default Walls;
