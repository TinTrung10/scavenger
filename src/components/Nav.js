import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
    return (
        
        <nav>
          
            <NavLink exact="true" activeclassname="active" to="/home">
                <FontAwesomeIcon icon={faHouse} color="#ffffff"/><p>Hjem</p>
            </NavLink>
            
            <NavLink exact="true" activeclassname="active" to="/list">
                <FontAwesomeIcon icon={faCartShopping} color="#ffffff"/><p>Indkøbskurv</p>
            </NavLink>
           
            <NavLink exact="true" activeclassname="active" to="/profile">
                <FontAwesomeIcon icon={faUser} color="#ffffff"/><p>Profil</p>
            </NavLink>
           
        </nav>
    )
}