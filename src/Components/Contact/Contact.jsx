import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Info } from '../../Data/data'
import './Contact.scss'
// import { YMaps, Map, Placemark } from 'react-yandex-maps'

export default function Contact() {
    const {lan} = useContext(Context)
    return (
        <section className='contact'>
            <div className="container">
                <div className="container__address">
                    {
                        Info?.map((e) => (
                            <div key={e.id} className='container__address'>
                                <ul className="container__address__left">
                                    <li className='container__address__left__item'>
                                        <i className="bi bi-globe"></i>
                                        <span>
                                            <p>{lan === 'uz' ? "Veb sayt" : lan === 'ru' ? 'Веб сайт' : lan === 'en' ? 'Web site' : ""}</p>
                                            <a href={e.sayt_link}>{e.sayt_name}</a>
                                        </span>
                                    </li>
                                    <li className='container__address__left__item'>
                                        <i className="bi bi-telephone-fill"></i>
                                        <span>
                                            <p>{lan === 'uz' ? "Telefon" : lan === 'ru' ? 'Телефон' : lan === 'en' ? 'Telephone' : ""}</p>
                                            <a href={`tel${e.tel}`}>{e.tel}</a>
                                        </span>
                                    </li>
                                    <li className='container__address__left__item'>
                                        <i className="bi bi-envelope-fill"></i>
                                        <span>
                                            <p>{lan === 'uz' ? "Pochta" : lan === 'ru' ? 'Почта' : lan === 'en' ? 'Mail' : ""}</p>
                                            <a href={e.email}>{e.email}</a>
                                        </span>
                                    </li>
                                    <li className='container__address__left__item'>
                                        <i className="bi bi-geo-alt-fill"></i>
                                        <span>
                                            <p>{lan === 'uz' ? "manzil" : lan === 'ru' ? 'Адресс' : lan === 'en' ? 'address' : ""}</p>
                                            <a href={e.address_link}>{e.address_name}</a>
                                        </span>
                                    </li>
                                </ul>
                                <div className="container__address__right">
                                    {/* <YMaps className='container__address__right__map'>
                                        <Map defaultState={{ center: [e.lat, e.lon], zoom: 17, }}>
                                            <Placemark geometry={[e.lat, e.lon]} />
                                        </Map>
                                    </YMaps> */}
                                    <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6610169292708!2d${e.lon}!3d${e.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1suz!2s!4v1673713040343!5m2!1suz!2s`} width="600" height="576" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
