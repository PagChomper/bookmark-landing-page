import "./footer.scss"
import footerLogo from "../../images/logo-bookmark.svg"
import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"




export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__cover">
                <img className="footer__logo" src={footerLogo} alt="" />
            </div>
            <ul className="footer__list">
                <li className="footer__list__item">Features</li>
                <li className="footer__list__item">Pricing</li>
                <li className="footer__list__item">Contact</li>
            </ul>
            <div className="footer__socials">
                <img className="footer__socials__fb" src={facebook} alt="" />
                <img className="footer__socials__twt" src={twitter} alt="" />
            </div>
        </footer>
    )
}