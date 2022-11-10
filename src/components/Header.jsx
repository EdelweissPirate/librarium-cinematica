import { useNavigate } from "react-router-dom"
import TitleGlow from "./shared/TitleGlow"

function Header() {
    const navigate = useNavigate()

    const onClick = () => {
        const _content = document.getElementById('home')

        _content.style.animation = 'fade-out 1s forwards'
        
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }

    return (
        <header>
            <button onClick={onClick}>
                <TitleGlow content={'Librarium Cinematica'} />
            </button>
        </header>
    )
}

export default Header