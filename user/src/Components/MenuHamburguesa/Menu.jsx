"use client"
import React, { useState } from 'react'
import close from '../../assets/cerrar.png'
import menu from '../../assets/menu.png'
import styles from './Menu.module.css'

export const Menu = () => {
    const [menuState, setMenuState] = useState(false)

    const handleButton = () => {
        setMenuState(!menuState)
    }

  return (
    <>
        {
            menuState ? (<button onClick={handleButton} className={styles.buttonMenu}><img src={close} alt=""  className={styles.imagenMenu}/></button>) : (<button onClick={handleButton}  className={styles.buttonMenu}><img src={menu} alt=""  className={styles.imagenMenu}/></button>)
        }
        

        {
            menuState ? (
            <div  className={styles.containerMenu}>
                <button className={styles.containerButton}>Home</button>
                <button className={styles.containerButton}>About</button>
                <button className={styles.containerButton}>Interests</button>
                <button className={styles.containerButton}>Contact</button>
            </div>) : (null)
        }
    </>
    
  )
}
