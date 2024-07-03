import React from 'react'
import styles from './Header.module.css'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
  return (
    <div className={styles.divHeader}>
        <img src="https://i.ibb.co/BBj9vvW/aaaaaaa.jpg" alt="" className={styles.imgHeader}/>
        <div>
          <h1 className={styles.nameHeader}>Alex Martinez</h1>
          <Navbar/>
        </div>
    </div>
  )
}
