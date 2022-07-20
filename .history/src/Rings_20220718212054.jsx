import React, { useRef } from "react";

const Rings = () => {
  const itemsRef = useRef([]);
  return (
    <>
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(
      {(_, i) => {
        <mesh key={i} position={[0, 0, 0]} castShadow receiveShadow>
            ref={(el)=>itemsRef.current = el}
        </mesh>
      }}
      )
    </>
  );
};

export default Rings;
