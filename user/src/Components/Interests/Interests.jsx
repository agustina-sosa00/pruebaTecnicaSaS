import React from 'react'
import styles from './Interests.module.css'

export const Interests = () => {
  return (
    <div className={styles.divInterests}>
        <div className={styles.subCaja}>
            <h3 className={styles.titleInterests}>Mis intereses</h3>
            <div className={styles.containerCajas}>
            <div className={styles.cajaInteres}>
              <h3 className={styles.tituloInteres}>Desarrollo Web</h3>
              <p className={styles.pInteres}>HTML, CSS, JavaScript</p>
              <p className={styles.pInteres}>Frameworks y bibliotecas como React, Angular, Vue.js</p>
            </div>

            <div className={styles.cajaInteres}>
              <h3 className={styles.tituloInteres}>Diseño de Interfaz de Usuario (UI)</h3>
              <p className={styles.pInteres}>Diseño responsivo</p>
              <p className={styles.pInteres}>Principios de diseño UI/UX</p>
              <p className={styles.pInteres}>Herramientas de diseño como Figma, Sketch, Adobe XD</p>
            </div>

            <div className={styles.cajaInteres}>
              <h3 className={styles.tituloInteres}>Rendimiento Web</h3>
              <p className={styles.pInteres}>Optimización de la velocidad de carga</p>
              <p className={styles.pInteres}>Técnicas de Lazy Loading</p>
              <p className={styles.pInteres}>Minificación de recursos</p>
            </div>

            <div className={styles.cajaInteres}>
              <h3 className={styles.tituloInteres}>Desarrollo Móvil</h3>
              <p className={styles.pInteres}>Progressive Web Apps (PWAs)</p>
              <p className={styles.pInteres}>Desarrollo de aplicaciones móviles con React Native</p>
            </div>

            <div className={styles.cajaInteres}>
              <h3 className={styles.tituloInteres}>Control de Versiones</h3>
              <p className={styles.pInteres}>Git y GitHub</p>
              <p className={styles.pInteres}>Buenas prácticas de control de versiones</p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Interests