import Link from 'next/link'
import { Home, User, Phone, Code } from '@styled-icons/feather'

import { Button } from '../components/Button'

import styles from '../styles/SideBar.module.scss'

export function SideBar() {
  return (
    <div className={styles.actions}>
      <div className={styles.selectAction}>
        <Link href={`/`} passHref>
          <Button outline={false}>
            <Home />
          </Button>
        </Link>

        <span>Home</span>
      </div>

      <div className={styles.selectAction}>
        <Link href={`/me/AboutMe`} passHref>
          <Button outline={false}>
            <User />
          </Button>
        </Link>

        <span>Sobre mim</span>
      </div>

      <div className={styles.selectAction}>
        <Link href={`/me/Contact`} passHref>
          <Button outline={false}>
            <Phone />
          </Button>
        </Link>

        <span>Contato</span>
      </div>

      {/* <div className={styles.selectAction}>
        <Link href={`/me/Project`} passHref>
          <Button outline={false}>
            <Code />
          </Button>
        </Link>

        <span>Projetos</span>
      </div> */}
    </div>
  )
}
