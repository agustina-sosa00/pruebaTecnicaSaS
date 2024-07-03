import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
    <div className={styles.aboutDiv}>
      <div className={styles.subCaja}>
        <div className={styles.subCaja1}>
        <h2 className={styles.titleAbout}>Sobre Mi</h2>
        </div>
        <div className={styles.cajaSub2}>
          <div className={styles.caja1}>
            <p className={styles.description}>Hola, soy <span className={styles.spanText}>Alex Martinez</span>, un apasionado desarrollador frontend con sede en Madrid, España. Me encanta trabajar en proyectos innovadores y desafiantes que permitan el uso de las últimas tecnologías web. Tengo experiencia en HTML, CSS, y JavaScript, y disfruto creando interfaces de usuario limpias y efectivas. En mi tiempo libre, me gusta explorar nuevas tendencias en desarrollo web y colaborar en proyectos de código abierto.</p>
            </div>
          <div  className={styles.caja2}>
            <img src="https://i.ibb.co/2P6ZxrH/hombre.webp" alt="" className={styles.imgCaja1}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About