import { CameraControls, Environment ,useGLTF, useFBX, useAnimations} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef, useEffect} from "react";
import { VRMAvatar } from  './VRMAvatar'
import { useControls } from "leva";
import { useButtonStore1 } from '../utils/useButtonStore'

export const Experience = () => {
  const controls = useRef();
  const button1Clicked = useButtonStore1((state) => state.button1Clicked);

  const { avatar } = useControls("VRM", {
    avatar: {
      value: "3859814441197244330.vrm",
      options: [
        "262410318834873893.vrm",
        "3859814441197244330.vrm",
        "3636451243928341470.vrm",
        "8087383217573817818.vrm",
      ],
    },
  });


  useEffect(() => {
    if(button1Clicked){
      controls.current?.setLookAt(0, 1, -2, 0, 1.5, 0, true);
    }
    else{
      controls.current?.setLookAt(0, 1.5, -1, 0, 1.5, 0, true);
    }
  }, [button1Clicked]);
      
  return (
    <>
      <CameraControls
        ref={controls}
        maxPolarAngle={Math.PI / 2}
        minDistance={1}
        maxDistance={10}
      />
      <Environment preset="sunset" />
      <directionalLight intensity={2} position={[10, 10, 5]} />
      <directionalLight intensity={1} position={[-10, 10, 5]} />
      <VRMAvatar avatar = {avatar}/>
      <EffectComposer>
        <Bloom mipmapBlur intensity={0.7} />
      </EffectComposer>
    </>
  );
};