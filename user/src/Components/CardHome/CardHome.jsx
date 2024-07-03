import React from 'react'
import styles from './CardHome.module.css'

export const CardHome = () => {
  return (
    <div className={styles.divCardHome}>
        <h4 className={styles.subText}>Hola soy</h4>
        <h2 className={styles.textName}>Alex Martinez</h2>
        <h4 className={styles.subText}>Desarrollador frontend</h4>
    </div>
  )
}

export default CardHome;