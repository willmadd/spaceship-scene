import React, { useRef } from "react";

const Rings = () => {
  const itemsRef = useRef([]);
  return (
    <>
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map(
      {(_, i) => {
        <mesh ref={(el)=>itemsRef.current = el} key={i} position={[0, 0, 0]} castShadow receiveShadow>
            <torusGeometry args={[3.25, 0.05, 16, 100]}/>
            
        </mesh>
      }}
      )
    </>
  );
};

export default Rings;
