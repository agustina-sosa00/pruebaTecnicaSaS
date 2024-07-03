import CardHome from "@/Components/CardHome/CardHome";
import styles from './page.module.css'
import About from "@/Components/About/About";
import Interests from "@/Components/Interests/Interests";
import Contact from "@/Components/Contact/Contact";

export default function Home() {
  return (
    <>
    <div className={styles.divHome} id="home">
       <CardHome/>
    </div>
    <section id="sec1">
      <About/>
    </section>
    <section id="sec2">
      <Interests/>
    </section>
    <section id="sec3">
      <Contact/>
    </section>
    </>
  );
}
