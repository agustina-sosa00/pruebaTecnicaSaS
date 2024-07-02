import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.divHeader}>
        <img src="https://i.ibb.co/BBj9vvW/aaaaaaa.jpg" alt="" className={styles.imgHeader}/>
        <h1 className={styles.nameHeader}>Agustina Sosa</h1>
    </div>
  )
}
