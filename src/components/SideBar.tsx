import { User } from '@styled-icons/feather'
import { Phone } from '@styled-icons/feather'
import { Code } from '@styled-icons/feather'

import { Button } from '../components/Button'

import styles from '../styles/SideBar.module.scss'

export function SideBar() {
  return (
    <div className={styles.actions}>
      <div className={styles.selectAction}>
        <Button outline={false}>
          <User />
        </Button>

        <span>Sobre mim</span>
      </div>

      <div className={styles.selectAction}>
        <Button outline={false}>
          <Phone />
        </Button>

        <span>Contato</span>
      </div>

      <div className={styles.selectAction}>
        <Button outline={false}>
          <Code />
        </Button>

        <span>Projetos</span>
      </div>
    </div>
  )
}
