import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Results } from '../../Data/data'
import './Result.scss'

export default function Result() {

    const {lan} = useContext(Context)

    return (
        <section className='result'>
            <div className="container">
                {
                    Results?.map((e) => (
                        <div key={e.id} className="container__result">
                            <h2 className="container__result__title">{e[`title_${lan}`]}</h2>
                            <p className="container__result__text">{e[`text_${lan}`]}</p>
                            <ul className='container__result__list'>
                                {
                                    e.items?.map((j) => (
                                        <li className='container__result__list__item' key={j.id}>
                                            <img className='container__result__list__item__img' src={j.img} alt="" />
                                            <p className='container__result__list__item__text'>{j[`text_${lan}`]}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
