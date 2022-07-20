import React from "react";

const Tube = () => {
  return (
    <>
      <group>
        <mesh position={[50, 30, 360]}>
          <boxGeometry args={[50, 50, 20, 32]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </group>
    </>
  );
};

export default Tube;
