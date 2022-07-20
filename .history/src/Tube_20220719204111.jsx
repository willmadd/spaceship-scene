import { RoundedBox } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from 'three';
import normalsSrc from '../public/images/metal_0055_normal_direct_1k.jpg'
import roughnessSrc from '../public/images/metal_0055_roughness_1k.png'
import texturesSrc from '../public/images/metal_0055_color_1k.png'
import heightSrc from '../public/images/metal_0055_height_1k.png'


const Tube = () => {

const [normals, roughness, texture, height] = useLoader(THREE.TextureLoader, [])

  return (
    <>
      <group position={[-4,-0.25,0]}>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.2} position={[0, 1, 0]} />
        <mesh position={[0, 0.5, 2]}>
          <cylinderGeometry args={[0.25, 0.25, 1, 32]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.2} position={[0, 1, 2]} />
        <mesh position={[0, 1, 1]} rotation={[-Math.PI / 2, 0,0]}>
          <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh position={[0, 1, 1.73]} rotation={[-Math.PI / 2, 0,0]}>
          <cylinderGeometry args={[0.30, 0.30, 0.2, 6]} />
          <meshStandardMaterial color={"yellow"} />
        </mesh>
        <mesh position={[0, 1, 0.21]} rotation={[-Math.PI / 2, 0,0]}>
          <cylinderGeometry args={[0.30, 0.30, 0.2, 6]} />
          <meshStandardMaterial color={"yellow"} />
        </mesh>
      </group>
    </>
  );
};

export default Tube;