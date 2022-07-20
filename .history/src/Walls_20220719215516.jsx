import { useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from 'three';
import img from '../public/images/engine.jpg';


const Walls = () => {

const background = useLoader(THREE.TextureLoader,img )

  return (
    <group position={[0,15,0]}>
      <mesh position={[0,0,-20]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial map={background} />
      </mesh>
      <mesh rotation={[0,Math.PI/2,0]} position={[-10,0,0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial map={background}/>
      </mesh>
    </group>
  );
};

export default Walls;
