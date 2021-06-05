import { useState } from 'react'
import * as GiIcon from 'react-icons/gi'
import { Link } from 'react-router-dom';



function SideBar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)


    return (
        <div className={sidebar ? 'sidebar active' : 'sidebar'} >
            <div className="hamburgerMenu">
                <GiIcon.GiHamburgerMenu onClick={showSidebar} />
            </div>
            <ul className="nav_list">
                <li>
                    <Link to="/">
                        <GiIcon.GiBookCover />
                        <span className="links_name">Page1</span>
                    </Link>

                </li>
                <li>
                    <Link to="/">
                        <GiIcon.GiBookshelf />
                        <span className="links_name">Page2</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar