import { Menu } from '../MenuHamburguesa/Menu'
import { Navbar } from '../Navbar/Navbar'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.headerDiv}>
      <div className={styles.subDiv}>
        <img src="https://i.ibb.co/3Bn2JQT/hombre2.jpg" alt="" className={styles.imgHeader}/>
        <h1 className={styles.nameHeader}>Alex Martinez</h1>
        
      </div>
      <div className={styles.subDiv2}>
        <Navbar/>
      </div>
      {/* <div className={styles.subDivMenu}>
          <Menu/>
        </div> */}
    </div>
  )
}
 