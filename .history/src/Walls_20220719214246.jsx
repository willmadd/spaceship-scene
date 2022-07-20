import React from 'react';

const Walls = () => {
    return (
<group>
    <mesh>
<planeGeometry args={[30,30]}/>
<meshStandardMaterial color={'green'}/>
    </mesh>
</group>
    )
}

export default Walls;
