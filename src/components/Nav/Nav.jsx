import "./nav.scss"
import Logo from "../../images/logo-bookmark.svg"
import Close from "../../images/icon-close.svg"
import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"




export default function Nav(props) {

    


    return (
        <nav className={props.isOpen ? "navOpen" : "nav"}>
           {!props.isOpen && <img className="nav__logo" src={Logo} alt="Bookmark Logo" />}
           {!props.isOpen && <div className="nav__hamburger" onClick={props.openMenu}>
                <div className="line"></div>
                <div className="line middle"></div>
                <div className="line"></div>
            </div>}
            {props.isOpen && <div className="nav__menu">
                <div className="nav__menu__nav">
                    <img className="nav__menu__nav__logo" src={Logo} alt="Bookmark Logo" />
                    <img src={Close} alt="" onClick={props.openMenu}/>
                </div>
                <div className="nav__menu__list">
                    <ul>
                        <div className="menu__line"></div>
                        <li className="list1">Features</li>
                        <div className="menu__line"></div>
                        <li className="list2">Pricing</li>
                        <div className="menu__line"></div>
                        <li className="list3">Contact</li>
                        <div className="menu__line"></div>
                        <li className="list4">Login</li>
                    </ul>
                </div>
                <div className="nav__menu__socials">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>}
            <div className="nav__items">
                <a className="nav__links" href="#">Features</a>
                <a className="nav__links" href="#">Pricing</a>
                <a className="nav__links" href="#">Contact</a>
                <a className="nav__login" href="#">Login</a>
            </div>
        </nav>
    )
}