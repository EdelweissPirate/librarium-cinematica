import Placeholder1 from '../../assets/placeholders/placeholder_1.png'
import Placeholder2 from '../../assets/placeholders/placeholder_2.png'
import Placeholder3 from '../../assets/placeholders/placeholder_3.png'
import Placeholder4 from '../../assets/placeholders/placeholder_4.png'
import Placeholder5 from '../../assets/placeholders/placeholder_5.png'
import Placeholder6 from '../../assets/placeholders/placeholder_6.png'
import Placeholder7 from '../../assets/placeholders/placeholder_7.png'
import Placeholder8 from '../../assets/placeholders/placeholder_8.png'
import Placeholder9 from '../../assets/placeholders/placeholder_9.png'

function Placeholder() {
    const placeholders = [
        Placeholder1, 
        Placeholder2, 
        Placeholder3, 
        Placeholder4, 
        Placeholder5, 
        Placeholder6, 
        Placeholder7, 
        Placeholder8, 
        Placeholder9
    ]

    const chosenPlaceholder = placeholders[Math.floor(Math.random() * placeholders.length)]
    return chosenPlaceholder
}

export default Placeholder