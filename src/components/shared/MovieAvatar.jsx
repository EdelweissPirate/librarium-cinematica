import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

function MovieAvatar(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        ref.current.rotation.y += (0.01 * (!hovered || clicked))
        if(hovered || clicked){
            ref.current.rotation.y = 0
        }
    })

    //create texture
    const texture = useTexture(props.texture)
    
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={hovered || clicked ? 2.5 : 1.2}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1.5, 2, .01]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

export default MovieAvatar