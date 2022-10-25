import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCommentDots, faStar, faLock, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import "../profilepage.css";

export default function ProfilePage() {
    return (
        <>
        <section className="profile">

            <div className='profile_header'>
                <div className='header_icon'>
                    <FontAwesomeIcon icon={faChevronDown} color="#000000"/>
                </div>
                <div className='header_title'>
                    <h2>Konto</h2>
                </div>
            </div>

        </section>

        <div className='line'></div>

        <section className='user'>
            <div className='opret'>
                <h2>Opret bruger</h2>
            </div>
            <div className='login'>
                <h2>Log ind</h2>
            </div>
        </section>

        <div className='line'></div>

        {/*Forskellige sider man kan tilgå på profil siden */}

        <section className='profile_content1'>

        <section className='profile_content'>
            <div className='item1'>
                <FontAwesomeIcon className='icon' icon={faCommentDots} color="#000000"/>
            </div>
            <div className='item2'>
                <h2>Kontakt os</h2>
            </div>
            <div className='item3'>
                <FontAwesomeIcon className='icon' icon={faChevronDown} color="#000000"/>
            </div>
        </section>

        <div className='line2'></div>


        <section className='profile_content'>
            <div className='item1'>
                <FontAwesomeIcon className='icon2' icon={faStar} color="#000000"/>
            </div>
            <div className='item2'>
                <h2>Skriv en anmeldelse</h2>
            </div>
            <div className='item3'>
                <FontAwesomeIcon className='icon' icon={faChevronDown} color="#000000"/>
            </div>
        </section>

        <div className='line2'></div>


        <section className='profile_content'>
            <div className='item1'>
                <FontAwesomeIcon className='icon' icon={faLock} color="#000000"/>
            </div>
            <div className='item2'>
                <h2>Privatpolitik</h2>
            </div>
            <div className='item3'>
                <FontAwesomeIcon className='icon' icon={faChevronDown} color="#000000"/>
            </div>
        </section>

        <div className='line2'></div>


        <section className='profile_content'>
            <div className='item1'>
                <FontAwesomeIcon className='icon' icon={faBell} color="#000000"/>
            </div>
            <div className='item2'>
                <h2>Favoritter</h2>
            </div>
            <div className='item3'>
                <FontAwesomeIcon className='icon' icon={faChevronDown} color="#000000"/>
            </div>
        </section>

        <div className='line2'></div>


        <section className='profile_content'>
            <div className='item1'>
                <FontAwesomeIcon className='icon3' icon={faGear} color="#000000"/>
            </div>
            <div className='item2'>
                <h2>Indstillinger</h2>
            </div>
            <div className='item3'>
                <FontAwesomeIcon className='icon' icon={faChevronDown} color="#000000"/>
            </div>
        </section>

        <div className='line2'></div>

        </section>
        </>
    );
}