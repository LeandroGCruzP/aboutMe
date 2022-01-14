import { SideBar } from '../components/SideBar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* -------------------- Container Left -------------------- */}
      <div className={styles.containerLeft}>
        <div className={styles.info}>
          <div className={styles.userInfo}>
            <span className={styles.title}>Leandro G. Cruz Pizarro</span>
            <span className={styles.subtitle}>Eng. da Computação</span>
          </div>

          <div className={styles.motivation}>
            <p className={styles.phrase}>
              Não há vida sem desafios, por isso precisamos de humildade para
              aprender, perseverança para evoluir, força para nos erguer e
              ensinar tudo o que aprendemos.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------- Container Right -------------------- */}
      <div className={styles.containerRight}>
        <SideBar />
      </div>
    </div>
  )
}
