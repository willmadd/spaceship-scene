import { OrbitControls } from '@react-three/drei';
import React from 'react';

const Mothership = () => {
    return (
        <>
        <OrbitControls target={[0,0.35,0]}/>
        </>
    );
}

export default Mothership;
