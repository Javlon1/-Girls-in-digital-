import React, { useContext, useEffect, useState } from 'react'
import { Info, Nav } from '../../Data/data'
import './Footer.scss'
import Logo__img from '../../Assets/Img/logo img.svg'
import Logo__text from '../../Assets/Img/logo text.svg'
import { Context } from '../../Context/Context'

export default function Footer() {
    const a = ['uz', 'ru', 'en']
    const {lan} = useContext(Context)
    const [fil, setFil] = useState([window.localStorage.getItem('lan')])
    
    window.localStorage.setItem('lan', fil)

    return (
        <section className='footer'>
            <div className="container">
                <a className='container__img' href="#home">
                    <img src={Logo__img} alt="" />
                    <img src={Logo__text} alt="" />
                </a>
                <ul className='container__list1'>
                    {
                        Nav?.map((e, i) => (
                            <li key={i} className="container__list1__item">
                                <a href={e[`nav_${lan}`]}>{e[`nav_${lan}`]}</a>
                            </li>
                        ))
                    }
                </ul>
                {
                    Info?.map((e) => (
                        <ul key={e.id} className='container__list2'>
                            <li className='container__list2__item1'>
                                <ul className='container__list2__item1__list'>
                                    {
                                        a.map((l,p) => (
                                            <li key={p} className='container__list2__item1__list__item'>
                                                <button onClick={()=> setFil(l)} className={fil === l ? 'container__list2__item1__list__item__btn act':"container__list2__item1__list__item__btn"}>{l}</button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li className='container__list2__item2'>
                                <ul className='container__list2__item2__list'>
                                    <li className='container__list2__item2__list__item'>
                                        <a href={e.insta_link}><i className="bi bi-instagram"></i></a>
                                    </li>
                                    <li className='container__list2__item2__list__item'>
                                        <a href={e.teleg_link}><i className="bi bi-telegram"></i></a>
                                    </li>
                                    <li className='container__list2__item2__list__item'>
                                        <a href={e.youtu_link}><i className="bi bi-youtube"></i></a>
                                    </li>
                                    <li className='container__list2__item2__list__item'>
                                        <a href={e.faceb_link}><i className="bi bi-facebook"></i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </section>
    )
}
