import React from "react";

const Tube = () => {
  return (
    <>
      <group>
        <mesh>
      <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
      </group>
    </>
  );
};

export default Tube;
