import "./browserlist.scss"
import Google from "../../images/logo-chrome.svg"
import Firefox from "../../images/logo-firefox.svg"
import Opera from "../../images/logo-opera.svg"
import Dots from "../../images/bg-dots.svg"



export default function BrowserList() {
    return (
        <section className="bl">
            <div className="bl__text">
                <h2 className="bl__title">Download the extension</h2>
                <p className="bl__desc">We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            </div>
            <div className="bl__cards">
                <div className="bl__browser google">
                    <img className="bl__browser__logo" src={Google} alt="" />
                    <h3 className="bl__browser__name">Add to Chrome</h3>
                    <p className="bl__browser__version">Minimum version 62</p>
                    <img className="bl__browser__line" src={Dots} alt="" />
                    <a className="bl__browser__install" href="#">Add & Install Extension</a>
                </div>
                <div className="bl__browser firefox">
                    <img className="bl__browser__logo" src={Firefox} alt="" />
                    <h3 className="bl__browser__name">Add to Firefox</h3>
                    <p className="bl__browser__version">Minimum version 55</p>
                    <img className="bl__browser__line" src={Dots} alt="" />
                    <a className="bl__browser__install" href="#">Add & Install Extension</a>
                </div>
                <div className="bl__browser opera">
                    <img className="bl__browser__logo" src={Opera} alt="" />
                    <h3 className="bl__browser__name">Add to Opera</h3>
                    <p className="bl__browser__version">Minimum version 46</p>
                    <img className="bl__browser__line" src={Dots} alt="" />
                    <a className="bl__browser__install" href="#">Add & Install Extension</a>
                </div>
            </div>
        </section>
    )
}