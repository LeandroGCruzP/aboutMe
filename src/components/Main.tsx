import styles from '../styles/Main.module.scss'

export function Main() {
  return (
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
  )
}