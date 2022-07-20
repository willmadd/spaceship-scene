/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Wraith({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/wraithgltf.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_1.geometry} material={materials.material_1} material-envMapIntensity={20}/>
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_2.geometry} material={materials.material_1_blue_joystick} material-envMapIntensity={20} />>
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_3.geometry} material={materials.material_1_cockpit} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_4.geometry} material={materials.material_1_couplers} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_5.geometry} material={materials.material_1_cushion} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_6.geometry} material={materials.material_1_displays} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_7.geometry} material={materials.material_2} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_8.geometry} material={materials.material_3} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_9.geometry} material={materials.material_4} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_10.geometry} material={materials.material_1_door} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_11.geometry} material={materials.material_2_door} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_12.geometry} material={materials.material_1_green} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_13.geometry} material={materials.material_1_lights} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_14.geometry} material={materials.material_1_propulsion} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_15.geometry} material={materials.material_1_red} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_16.geometry} material={materials.material_1_red_joystick} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_17.geometry} material={materials.material_1_windshield_glass} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_18.geometry} material={materials.material_1_windshield_liner} material-envMapIntensity={20} />
        <mesh castShadow receiveShadow roughness={5} geometry={nodes.wraith_raider2_19.geometry} material={materials['default']} material-envMapIntensity={20} />
      </group>
    </group>
  )
}

useGLTF.preload('models/wraithgltf.gltf')
