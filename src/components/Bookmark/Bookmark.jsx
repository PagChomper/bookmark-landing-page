import "./bookmark.scss"
import Illustration2 from "../../images/illustration-features-tab-1.svg"



export default function Bookmark() {
    return (
        <section className="bookmark bookmark__grid">
            <div className="bookmark__img_container grid-left">
                <img className="bookmark__img" src={Illustration2} alt="Bookmark Illustration" />
                <div className="bookmark__banner"></div>
            </div>
            <div className="bookmark__text grid-right">
                <h2 className="bookmark__text__title">Bookmark in one click</h2>
                <p className="bookmark__text__desc">
                Organize your bookmarks however you like. 
                Our simple drag-and-drop interface gives 
                you complete control over how you manage your 
                favourite sites.
                </p>
                <a href="#" className="bookmark__text__button">More Info</a>
            </div>
        </section>
    )
}