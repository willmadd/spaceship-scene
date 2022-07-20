import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import Mothership from "../Mothership";
import Ground from "../Ground";

const Scene = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    // boxRef.current.rotation.y += 0.02;
  });

  return (
    <>
    <axesHelper arg={[10,10,10]} />
      <Mothership />
      <Ground />
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>

    <Canvas shadows camera={{ fov: 70, position: [0, 0, 3] }}>
      <OrbitControls />
      <Scene />
    </Canvas>
    </Suspense>
  );
};

export default App;
