import { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Slider } from '../../Data/data'
import './Intro.scss'

export default function Intro() {
    const {lan} = useContext(Context)

    return (
        <section id='home' className='intro'>
            <div className="container">
                {
                    Slider?.map((e, i) => (
                        <div className='container__intro' key={i}>
                            <div className="container__intro__left">
                                <h1 className='container__intro__left__title'>{e.title}</h1>
                                <p className='container__intro__left__text'>{e[`text_${lan}`]}</p>
                                <button className='container__intro__left__btn'>{lan === 'uz' ? "Ko'proq" : lan === 'ru' ? 'Подробнее' : lan === 'en' ? 'More' : "Ko'proq"}</button>
                            </div>
                            <div className="container__intro__right">
                                <img className='container__intro__right__img' src={e.img} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}