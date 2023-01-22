import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import './Registration.scss'

export default function Registration() {
    const {lan} = useContext(Context)
    
    const formReg = (e) => {
        e.preventDefault()
        const el = e.target.elements
        e.target.elements.name.value = ''
        e.target.elements.surname.value = ''
        e.target.elements.dataof.value = ''
        e.target.elements.mail.value = ''
        e.target.elements.address.value = ''
        e.target.elements.tel.value = ''
        fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/users',{
            method:'POST',
            headers: {
                'Content-type': 'application/json', // qysi formatta yuborish
                'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
                'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
                },
            body:JSON.stringify({
                name: el.name.value,
                surname: el.surname.value,
                birthday: el.dataof.value,
                email: el.mail.value,
                address: el.address.value,
                tel: el.tel.value,
            })
        })
        .then((res)=> res.json())
        .then((data)=> console.log(data))
    }
    
    return (
        <section className='registration'>
            <div className="container">
                <h2 className='container__title'>{lan === 'uz' ? "Roʻyxatdan oʻtish" : lan === 'ru' ? 'Регистрация' : lan === 'en' ? 'Registration' : "Roʻyxatdan oʻtish"}</h2>
                <form onSubmit={formReg} className='container__form' action="#">
                    <samp className='container__form__samp'>
                        <label htmlFor="inp1">{lan === 'uz' ? "Ism" : lan === 'ru' ? 'Имя' : lan === 'en' ? 'Name' : " "}</label>
                        <input id='inp1' name='name' className='container__form__samp__inp' type="text" required />
                    </samp>
                    <samp className='container__form__samp'>
                        <label htmlFor="inp2">{lan === 'uz' ? "Familiya" : lan === 'ru' ? 'Фамилия' : lan === 'en' ? 'Surname' : " "}</label>
                        <input id='inp2' name='surname' className='container__form__samp__inp' type="text" required />
                    </samp>
                    <samp className='container__form__samp'>
                        <label htmlFor="inp3">{lan === 'uz' ? "Tug'ilgan kun" : lan === 'ru' ? 'Дата рождения' : lan === 'en' ? 'Date of Birth' : " "}</label>
                        <input id='inp3' name='dataof' className='container__form__samp__inp' type="text" required />
                    </samp>
                    <samp className='container__form__samp'>
                        <label htmlFor="inp4">{lan === 'uz' ? "Pochta" : lan === 'ru' ? 'Почта' : lan === 'en' ? 'Mail' : " "}</label>
                        <input id='inp4' name='mail' className='container__form__samp__inp' type="email required" />
                    </samp>
                    <samp className='container__form__samp'>
                        <label htmlFor="inp5">{lan === 'uz' ? "Manzil" : lan === 'ru' ? 'Адрес' : lan === 'en' ? 'Address' : " "}</label>
                        <input id='inp5' name='address' className='container__form__samp__inp' type="text" required />
                    </samp>
                    <samp className='container__form__samp'>
                        <label htmlFor="inp6">{lan === 'uz' ? "Telefon" : lan === 'ru' ? 'Телефон' : lan === 'en' ? 'Telephone' : " "}</label>
                        <input id='inp6' name='tel' className='container__form__samp__inp' type="numbe requiredr" defaultValue={998}/>
                    </samp>
                    <button type='submit' className='container__form__btn'>{lan === 'uz' ? "Yuborish" : lan === 'ru' ? 'Отправить' : lan === 'en' ? 'Send' : "Yuborish"}</button>
                </form>
            </div>
        </section>
    )
}