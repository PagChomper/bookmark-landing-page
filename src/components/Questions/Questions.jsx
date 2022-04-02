import "./questions.scss"
import ArrowDown from "../../images/icon-arrow.svg"
import React from "react"
import {useState} from "react"




export default function Questions(props) {

    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(prevState => !prevState)
    }

    return (
        <div className="questions">
            <div className="questions__q" onClick={open}>
                <h3 className="questions__title">{props.title}</h3>
                <img className={isOpen ? "questions__arrow-open" : "questions__arrow"} src={ArrowDown} alt=""/>
            </div>
            {isOpen && <div className="questions__a">
                <p className="questions__a__desc">{props.answer}</p>
            </div>}
        </div>
    )
}