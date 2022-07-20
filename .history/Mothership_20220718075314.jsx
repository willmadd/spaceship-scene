import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React from 'react';

const Mothership = () => {
    return (
        <>
        <OrbitControls target={[0,0.35,0]}/>
        <PerspectiveCamera makeDefault position={[3,2,5]} fov={50}/>
        </>
    );
}

export default Mothership;
