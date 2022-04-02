import "./contact.scss"




export default function Contact() {
    return (
        <section className="contact">
            <h4 className="contact__count">35,000+ Already Joined</h4>
            <h2 className="contact__title">Stay up-to-date with what we're doing</h2>
            <form action="" className="contact__form">
                <input className="contact__form__input" type="text" placeholder="Enter your email address" />
                <button className="contact__form__submit" type="submit">Contact Us</button>
            </form>
        </section>
    )
}