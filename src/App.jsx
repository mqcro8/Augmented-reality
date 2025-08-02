import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { CameraWidget } from "./components/CameraWidget";
import { Experience } from "./components/Experience";
import { Welcome } from "./components/Welcome";
import { Credits } from "./components/Credits";
import { useButtonStore1, useButtonStore2} from './utils/useButtonStore';

function App() {
  const button1Clicked = useButtonStore1((state) => state.button1Clicked);
  const button2Clicked = useButtonStore2((state) => state.button2Clicked);

  return (
    <>
      {button1Clicked && <CameraWidget />}
      <Loader />
        <Canvas shadows camera={{ position: [0.25, 0.25, 2], fov: 50  }}>
        <color attach="background" args={["#333"]} />
        <fog attach="fog" args={["#333", 10, 20]} />
        {/* <Stats /> */}
        <Suspense>
          <Experience />
        </Suspense>
      </Canvas>

      {(!button1Clicked && !button2Clicked)&& <Welcome />}
      {button2Clicked && <Credits />}
    </>
  );
}

export default App;
