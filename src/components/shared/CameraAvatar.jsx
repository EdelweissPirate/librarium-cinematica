import { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CameraAvatar = ({ scale, position = [0, -1, -1] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, '/assets/3d/camera.glb');
    // const [hovered, hover] = useState(false);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.y += 0.03));
    return (
        <>
            <primitive
                ref={ref}
                object={gltf.scene}
                position={position}
                scale={scale}
                // onPointerOver={(event) => hover(true)}
                // onPointerOut={(event) => hover(false)}
            />
        </>
    );
};

export default CameraAvatar;