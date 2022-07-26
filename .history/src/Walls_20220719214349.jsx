import React from "react";

const Walls = () => {
  return (
    <group>
      <mesh>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <mesh>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </group>
  );
};

export default Walls;
