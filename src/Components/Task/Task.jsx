import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Tasks } from '../../Data/data'
import './Task.scss'

export default function Task() {
    const {lan} = useContext(Context)

  return (
    <section className='task'>
        <div className="container">
            <h2 className='container__title'>{lan === 'uz' ? "Vazifalar" : lan === 'ru' ? 'Задачи' : lan === 'en' ? 'Tasks' : "Vazifalar"}</h2>
            <ul className='container__list'>
                {
                    Tasks?.map((e,i)=>(
                        <li className='container__list__item' key={e.id}>
                            <b className='container__list__item__number'>{i+1}</b>
                            <p className='container__list__item__text'>{e[`title_${lan}`]}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}
