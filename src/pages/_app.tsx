import type { AppProps } from 'next/app'

import { SideBar } from '../components/SideBar'
import '../styles/globals.scss'
import styles from '../styles/Container.module.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <Component {...pageProps} />
      </div>
      <div className={styles.containerRight}>
        <SideBar />
      </div>
    </div>
  )
}

export default MyApp
