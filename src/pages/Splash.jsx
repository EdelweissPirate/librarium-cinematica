import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ModelViewer from "../components/ModelViewer"
import TitleGlow from "../components/shared/TitleGlow"

function Splash() {
    const navigate = useNavigate()

    useEffect(() => {
        hideHeader()
    
        return () => {

        }
    }, [])

    const hideHeader = () => {
        const _header = document.querySelector('header')
        _header.style.opacity = 0

        const _footer = document.querySelector('footer')
        _footer.style.opacity = 0
    }
    

    const onClick = () => {
        const _splash = document.getElementById('splash')

        _splash.style.animation = 'fade-out 1s forwards'
        
        setTimeout(() => {
            navigate('/home')
        }, 1000)
    }

    return (
        <button id="splash" onClick={onClick}>
            <ModelViewer modelPath={"/camera.glb"} />
            <TitleGlow content={'Librarium Cinematica'} />
        </button>
    )
}

export default Splash