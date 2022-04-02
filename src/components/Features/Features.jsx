import "./features.scss"



export default function Features() {
    return (
        <section className="features">
            <div className="features__desc">
                <h2 className="features__desc__title">Features</h2>
                <p className="features__desc__content">
                    Our aim is to make it quick and easy for you to access 
                    your favourite websites. Your bookmarks sync between 
                    your devices so you can access them on the go.
                </p>
            </div>
            <div className="features__links">
                <a className="features__links__item bookmark" href="#">Simple Bookmarking</a>
                <a className="features__links__item searching" href="#">Speedy Searching</a>
                <a className="features__links__item easy" href="#">Easy Sharing</a>
            </div>
        </section>
    )
}