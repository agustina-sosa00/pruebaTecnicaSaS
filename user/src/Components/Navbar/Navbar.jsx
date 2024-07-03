import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link href='/' ><button className={styles.buttonNavbar}>Home</button></Link>
        <Link href='/about'><button className={styles.buttonNavbar}>About</button></Link>
        <Link href='/interests'><button className={styles.buttonNavbar}>Interests</button></Link>
        <Link href='/contact'><button className={styles.buttonNavbar}>Contact</button></Link>
    </div>
  )
}
