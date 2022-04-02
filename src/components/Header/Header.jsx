import "./header.scss"
import Illustration from "../../images/illustration-hero.svg"



export default function Header(props) {
    return (
        <header className={!props.isOpen ? "header header-grid" : "header--extra"}> 
            <div className="header__img_container header-grid__right">
                <img className="header__img" src={Illustration} alt="Header Illustartion" />
                <div className="header__img__banner"></div>
            </div>
            <div className="header__text header-grid__left">
                <h1 className="header__text__title">A Simple Bookmark Manager</h1>
                <p className="header__text__desc">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="header__btns">
                    <a className="header__text__btn btn-chrome" href="#">Get it on Chrome</a>
                    <a className="header__text__btn btn-firefox" href="#">Get it on Firefox</a>
                </div>
            </div>
        </header>
    )
}