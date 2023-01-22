import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { Projects } from '../../Data/data'
import './Project.scss'

export default function Project() {
    const {lan} = useContext(Context)

    const project = []
    Projects?.map((e) => {
        project.push(e)
    })
    const projectLeft = []
    const projectRight = []
    if (project) {
        projectLeft.push(project[0])
        projectRight.push(project[1])
    }
    return (
        <section className='project'>
            <div className="container">
                <h2 className='container__title'>{lan === 'uz' ? "loyiha haqida" : lan === 'ru' ? 'О проекте' : lan === 'en' ? 'about the project' : "loyiha haqida"}</h2>
                {
                    projectLeft.map((e) =>(
                        <div key={e.id} className="container__project1">
                            <div className="container__project1__left">
                                <img className='container__project1__left__img' src={e.img} alt="" />
                            </div>
                            <div className="container__project1__right">
                                <p className='container__project1__right__text'>{e[`text_${lan}`]}</p>
                            </div>
                        </div>
                    ))
                }
                {
                    projectRight.map((e)=>(
                        <div key={e.id} className="container__project2">
                            <div className="container__project2__left">
                                <p className='container__project2__left__text'>{e[`text_${lan}`]}</p>
                            </div>
                            <div className="container__project2__right">
                                <img className='container__project2__right__img' src={e.img} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
