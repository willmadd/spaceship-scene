import { RoundedBox } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, {useEffect} from "react";
import * as THREE from "three";
import normalsSrc from "../public/images/metal_0055_normal_direct_1k.jpg";
import roughnessSrc from "../public/images/metal_0055_roughness_1k.jpg";
import texturesSrc from "../public/images/metal_0055_color_1k.jpg";
import heightSrc from "../public/images/metal_0055_height_1k.png";

const Tube = () => {

  const [normal, roughness, texture, height] = useLoader(THREE.TextureLoader, [normalsSrc, roughnessSrc, texturesSrc, heightSrc]);

  useEffect(()=>{
    [normal, roughness, texture, height].forEach(t => {
        t.wrapS = THREE.RepeatWrapping
        t.wrapT = THREE.RepeatWrapping
        t.repeat.set(1,1)
    })
    normal.encoding = THREE.LinearEncoding
}, [normal, roughness, texture, height])


  return (
    <>
      <group position={[-4, -0.25, 0]}>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
          <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            factor={0.1}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </mesh>
        <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.2} position={[0, 1, 0]} >        <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </RoundedBox>
        <mesh position={[0, 0.5, 2]}>
          <cylinderGeometry args={[0.25, 0.25, 1, 32]} />
          <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </mesh>
        <RoundedBox map={texture} args={[0.6, 0.6, 0.6]} radius={0.2} position={[0, 1, 2]} >
        <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </RoundedBox>
        <mesh position={[0, 1, 1]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 2, 32]} />
          <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </mesh>
        <mesh position={[0, 1, 1.73]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry
            args={[0.3, 0.3, 0.2, 6]}
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
          <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </mesh>
        <mesh position={[0, 1, 0.21]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 6]} />
          <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </mesh>
      </group>
      <group position={[-4, 0.25, -11]}>
      <RoundedBox map={texture} args={[2, 1, 2]} radius={0.2}  >
        <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </RoundedBox>
        <RoundedBox map={texture} args={[2, 1, 2]} radius={0.2} position={[1,0,0]} >
        <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </RoundedBox>
        <mesh position={[0, 0.25,5]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 8, 32]} />
          <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </mesh>
        <mesh position={[0.4, 0.2,5]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 8, 32]} />
          <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </mesh>
        <mesh position={[-0.40, 0.25,5]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 8, 32]} />
          <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </mesh>
        <mesh position={[-0.80, 0.25,5]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 8, 32]} />
          <meshStandardMaterial
            displacementMap={height}
            displacementScale={0.1}
            map={texture}
            normalMap={normal}
            roughnessMap={roughness}
            color={[0.4, 0.4, 0.4]}
          />
        </mesh>
      </group>
    </>
  );
};

export default Tube;
