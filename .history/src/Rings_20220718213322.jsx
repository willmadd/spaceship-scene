import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Rings = () => {
  const itemsRef = useRef([]);

useFrame(()=>{
    for (let i = 0; i < itemsRef.current.length; i++){
        let mesh = itemsRef[i];
        let z = (i -7) * 3.5;
        mesh.position.set(0,0,-z)
    }
})

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
