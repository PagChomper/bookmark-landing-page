import "./questionslist.scss"
import {questions} from "../../data"
import Questions from "../Questions/Questions"
import {useState} from "react"
import React from "react"




export default function QuestionsList() {

    const Question = questions.map((item) => (
        <Questions  id={item.id} title={item.title} answer={item.answer} key={item.id}/>
    ))

    return (
        <section className="ql">
            <div className="ql__text">
                <h2 className="ql__text__title">Frequently Asked Questions</h2>
                <p className="ql__text__desc">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            </div>
            <div className="ql__container">
                {Question}
            </div>
            <div className="flex">
                <a className="ql__info" href="#">More Info</a>
            </div>
        </section>
    )
}