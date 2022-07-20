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
      <Float speed={4} // Animation speed, defaults to 1
  rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
  floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[0, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
  >
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
