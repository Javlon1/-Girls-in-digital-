import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Directions } from '../../Data/data'
import './Direction.scss'



export default function Direction() {
    const {lan} = useContext(Context)
    return (
        <section className='direction'>
            <div className="container">
                <h2 className='container__title'>{lan === 'uz' ? "yo'nalishi" : lan === 'ru' ? 'Направлении' : lan === 'en' ? 'direction' : "yo'nalishi"}</h2>
                <p className='container__text'>{lan === 'uz' ? "Loyiha yo'nalishlar bo'yicha amalga oshiriladi" : lan === 'ru' ? 'Проект будет проводится по направлениям' : lan === 'en' ? 'The project will be carried out in the directions' : "Loyiha yo'nalishlar bo'yicha amalga oshiriladi"}</p>
                <ul className='container__direc'>
                    {
                        Directions?.map((e) => (
                            <li className='container__direc__item' key={e.id}>
                                <p className='container__direc__item__text'>{e[`title_${lan}`]}</p>
                                <img className='container__direc__item__img' src={e.img} alt="" />
                            </li>
                        ))
                    }
                </ul>
                <button className='container__btn'>{lan === 'uz' ? "Ro'yxatdan o'tish" : lan === 'ru' ? 'Записаться' : lan === 'en' ? 'Enroll' : "Ro'yxatdan o'tish"}</button>
            </div>
        </section>
    )
}
