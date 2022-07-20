import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Float, OrbitControls } from "@react-three/drei";
import Mothership from "../Mothership";
import Ground from "../Ground";
import SmallSpaceFighter from "./SmallSpaceFighter";
import Wraith from "./Wraithgltf";

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
      <Float>
      <Wraith scale={[0.005,0.005,0.005]} />

      </Float>

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
