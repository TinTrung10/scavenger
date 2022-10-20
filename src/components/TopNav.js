import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'


export default function TopNav() {
    return (
        
        <nav className='topnav'>

            <div className='row'>
                <h1 className='logo'>Scavenger</h1>
            </div>
            
            <div className='row'>
                <div className='search'><FontAwesomeIcon icon={faSearch} color="#ffffff"/></div>
            </div>
            
           
        </nav>
    )
}