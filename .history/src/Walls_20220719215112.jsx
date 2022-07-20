import { useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from 'three';
import img from '../public/images/engine.jpg';


const Walls = () => {

const background = useLoader(THREE.TextureLoader, )

  return (
    <group>
      <mesh position={[0,0,-20]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <mesh rotation={[0,Math.PI/2,0]} position={[-10,0,0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </group>
  );
};

export default Walls;
