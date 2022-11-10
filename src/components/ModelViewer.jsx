import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CameraAvatar from './shared/CameraAvatar'

function ModelViewer() {
    return (
        <>
            <Suspense fallback={null}>
                <Canvas>
                    <ambientLight intensity={0.3} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Suspense fallback={null}>
                        <CameraAvatar scale={window.innerWidth > 900 ? 1 : .6} />
                    </Suspense>
                </Canvas>
            </Suspense>
        </>
    )
}

export default ModelViewer