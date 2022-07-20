import React from 'react';

const Tube = () => {
    return (
<>
<group>

<mesh position={[50, 30, 360]}>
    <cylinderGeometry args={[5,5,20,32]}/>
    <meshStandardMaterial color={'green'}/>
</mesh>
</group>
</>
    );
}

export default Tube;