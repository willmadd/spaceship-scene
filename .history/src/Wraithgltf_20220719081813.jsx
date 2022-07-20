/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Wraith({ ...props }) {
  const group = useRef();
  const lightPoint = useRef(null);
  const lightRef = useRef(null)
  const { nodes, materials } = useGLTF("models/wraithgltf.gltf");
  
  useEffect(() => {
  // console.log('---',lightPoint.current.position)
  // lightRef?.current?.target.position.set(lightPoint.current.position)


}, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh position={[50, 30, 360]} ref={lightPoint}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[55, 200, -30]}>
          <spotLight intensity={3} ref={lightRef} />
          <mesh>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color={"red"} />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_1.geometry}
          material={materials.material_1}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_2.geometry}
          material={materials.material_1_blue_joystick}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_3.geometry}
          material={materials.material_1_cockpit}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_4.geometry}
          material={materials.material_1_couplers}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_5.geometry}
          material={materials.material_1_cushion}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_6.geometry}
          material={materials.material_1_displays}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_7.geometry}
          material={materials.material_2}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_8.geometry}
          material={materials.material_3}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_9.geometry}
          material={materials.material_4}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_10.geometry}
          material={materials.material_1_door}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_11.geometry}
          material={materials.material_2_door}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_12.geometry}
          material={materials.material_1_green}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_13.geometry}
          material={materials.material_1_lights}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_14.geometry}
          material={materials.material_1_propulsion}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_15.geometry}
          material={materials.material_1_red}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_16.geometry}
          material={materials.material_1_red_joystick}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_17.geometry}
          material={materials.material_1_windshield_glass}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_18.geometry}
          material={materials.material_1_windshield_liner}
          material-envMapIntensity={20}
        />
        <mesh
          castShadow
          receiveShadow
          metalness={1}
          roughness={5}
          geometry={nodes.wraith_raider2_19.geometry}
          material={materials["default"]}
          material-envMapIntensity={20}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/wraithgltf.gltf");
