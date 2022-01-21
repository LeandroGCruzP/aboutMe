import Image from 'next/image'
import Link from 'next/link'

import LinkedinImg from '../../assets/images/Linkedin.png'
import Mercado_LivreImg from '../../assets/images/Mercado_Livre.png'
import PinterestImg from '../../assets/images/Pinterest.png'
import TwitterImg from '../../assets/images/Twitter.png'
import VercelImg from '../../assets/images/Vercel.png'
import styles from '../../styles/Project.module.scss'

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.containerGrid}>
        <div className={styles.grid}>
          <div>
            <span className={styles.title} >Clone Linkedin</span>
          </div>
          <Link href="https://clone-linkedin-shimmer.netlify.app/" passHref >
            <a target="_blank">
              <Image src={LinkedinImg} alt="Clone Linkedin" />
            </a>
          </Link>
          <footer>
            <p>
              Trabalhando responsividade com 3 colunas.
            </p>
          </footer>
        </div>

        <div className={styles.grid}>
          <div>
            <span className={styles.title} >Clone Vercel</span>
          </div>
          <Link href="https://clone-vercel.netlify.app/" passHref >
            <a target="_blank">
              <Image src={VercelImg} alt="Clone Vercel" />
            </a>
          </Link>
          <footer>
            <p>
              Manipulando efeito de título.
            </p>
          </footer>
        </div>

        <div className={styles.grid}>
          <div>
            <span className={styles.title}>Clone Twitter</span>
          </div>
          <Link href="https://clone-twitter-responsive.netlify.app/" passHref >
            <a target="_blank">
              <Image src={TwitterImg} alt="Clone Twitter" />
            </a>
          </Link>
          <footer>
            <p>
              Melhorando trabalho de responsividade com 3 colunas.
            </p>
          </footer>
        </div>

        <div className={styles.grid}>
          <div>
            <span className={styles.title} >Clone Pinterest</span>
          </div>
          <Link href="https://clone-pinterest.netlify.app/" passHref >
            <a target="_blank">
              <Image src={PinterestImg} alt="Clone Pinterest" />
            </a>
          </Link>
          <footer>
            <p>
              Posicionamento de imagens customizado.
            </p>
          </footer>
        </div>

        <div className={styles.grid}>
          <div>
            <span className={styles.title} >Clone Mercado Livre</span>
          </div>
          <Link href="https://clone-mercado-livre.netlify.app/" passHref >
            <a target="_blank">
              <Image src={Mercado_LivreImg} alt="Clone Mercado Livre" />
            </a>
          </Link>
          <footer>
            <p>
              Básico de página de venda de produtos.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
