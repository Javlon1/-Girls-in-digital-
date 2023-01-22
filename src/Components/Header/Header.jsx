import React, { useContext, useEffect, useState } from 'react'
import { Nav } from '../../Data/data'
import './Header.scss'
import Logo__img from '../../Assets/Img/logo img.svg'
import Logo__text from '../../Assets/Img/logo text.svg'
import { Context } from '../../Context/Context'

export default function Header() {
    const { lan, setLan } = useContext(Context)
    const [lang, setLang] = useState()
    const [scrol, setScrol] = useState(false)
    const [nav, setNav] = useState(false)
    const a = ['uz', 'ru', 'en']
    const offSet = 80;

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


    window.addEventListener('scroll', () => {
        if (getTop() > offSet) {
            setScrol(true)
        } else {
            setScrol(false)
        }
    })
    
    const changeLang = (e) => {
        setLan(e.target.value)
    };

    useEffect(() => {
        window.localStorage.setItem('lan', lan)
    }, [lan])

    const changeLang2 = (e) => {
        window.localStorage.setItem('lan', e.target.name)
    };
    return (
        <section className={scrol ? 'header header__bc' : 'header'}>
            <div className="container">
                <nav className="container__nav">
                    <a className='container__nav__img' href="#home">
                        <img src={Logo__img} alt="" />
                        <img className='container__nav__img__text' src={Logo__text} alt="" />
                    </a>
                    <ul className="container__nav__list">
                        {
                            Nav?.map((e, i) => (
                                <li key={i} className="container__nav__list__item">
                                    <a href={e[`nav_${lan}`]}>{e[`nav_${lan}`]}</a>
                                </li>
                            ))
                        }
                        <select onChange={changeLang} defaultValue={lan} className='container__nav__list__select' name="" id="">
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>
                        <button className={scrol ? 'container__nav__list__btn active__btn' : 'container__nav__list__btn'}>{lan === 'uz' ? 'Registratsiya' : lan === 'ru' ? 'Регистрация' : lan === 'en' ? 'Registration' : 'Registratsiya'}</button>
                    </ul>
                    <ul className={nav ? 'container__nav__hamberger active' : 'container__nav__hamberger'}>
                        <ul className='container__nav__hamberger__select'>
                            {
                                a.map((l, p) => (
                                    <li key={p} onClick={changeLang2} className='container__nav__hamberger__select__item'>
                                        <button onClick={() => setLang(l)} name={l} className={lang === l ? 'container__list2__item1__list__item__btn act' : "container__list2__item1__list__item__btn"}>{l}</button>
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            Nav?.map((e, i) => (
                                <li key={i} className="container__nav__hamberger__item">
                                    <a href={e[`nav_${lan}`]}>{e[`nav_${lan}`]}</a>
                                </li>
                            ))
                        }
                        <button className={scrol ? 'container__nav__hamberger__btn active__btn' : 'container__nav__hamberger__btn'}>{lan === 'uz' ? 'Registratsiya' : lan === 'ru' ? 'Регистрация' : lan === 'en' ? 'Registration' : 'Registratsiya'}</button>
                    </ul>
                    <button onClick={() => setNav(!nav)} className='container__nav__btnHam'>{nav ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}</button>
                </nav>
            </div>
        </section>
    )
}
