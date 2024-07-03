import { FormContact } from '@/Components/FormContact/FormContact'
import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div className={styles.divContact}>
        <div className={styles.cajaGral}>
            <div className={styles.caja1}>
                <img src="https://i.ibb.co/0fCsYZt/oficina2.png" alt="" className={styles.imgCajaForm}/>
            </div>
            <div className={styles.caja2}>
                <FormContact/>
            </div>
        </div>
        
    </div>
  )
}

export default Contact;

