import React, { useRef } from "react";

const Rings = () => {
  const itemsRef = useRef([]);
  return (
    <>
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, i) => {
        console.log("asdf");
        return (
          <mesh ref={el => (itemsRef.current[i] = el)} key={i} position={[0, 0, i-5]} castShadow receiveShadow>
            <torusGeometry args={[3.25, 0.05, 16, 100]} />
            <meshStandardMaterial emissive={[0.5, 0.5, 0.5]} color={[0, 0, 0]} />
          </mesh>
        );
      })}
    </>
  );
};

export default Rings;
