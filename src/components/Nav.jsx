import { NavLink } from "react-router";
function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/about' className = {({ activePage }) => activePage ? "active-link" : ""} id='about' onClick={() => document.title="About Anatoli"}>
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className = {({ activePage }) => activePage ? "active-link" : ""} id='contact' onClick={() => document.title="Contact"}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' className = {({ activePage }) => activePage ? "active-link" : ""} id='portfolio' onClick={() => document.title="Portfolio"}>
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/resume' className = {({ activePage }) => activePage ? "active-link" : ""} id='resume' onClick={() => document.title="Resume"}>
                        Resume
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;