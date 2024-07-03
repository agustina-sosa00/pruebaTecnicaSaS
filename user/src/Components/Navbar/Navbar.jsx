import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
        <Link href='#home' className={styles.linkNav}><span className={styles.buttonNavbar}>Home</span></Link>
        <Link href='#sec1' className={styles.linkNav}><span className={styles.buttonNavbar}>About</span></Link>
        <Link href='#sec2' className={styles.linkNav}><span className={styles.buttonNavbar}>Interests </span></Link>
       
        <Link href='#sec3' className={styles.linkNav}><span className={styles.buttonNavbar}>Contact</span></Link>
    </div>
    
    </>
    
  )
}
