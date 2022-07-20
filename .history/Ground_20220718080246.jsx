import { MeshReflectorMaterial } from '@react-three/drei';
import React from 'react';

const Ground = () => {
    return (
        <mesh>
            <planeGeometry rotation={[Math.PI * 0.5]} castShadow receiveShadow/>
            {/* <MeshReflectorMaterial /> */}
            <meshStandardMaterial color={'red'}/>
        </mesh>
    );
}

export default Ground;
