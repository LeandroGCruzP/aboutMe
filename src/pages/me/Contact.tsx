import { Linkedin, MessageCircle, AtSign } from '@styled-icons/feather'

import { Button } from '../../components/Button'
import styles from '../../styles/Contact.module.scss'

export default function Contact() {
  const phone = '+5542998256197'
  const email = 'leandro.programmer@hotmail.com'
  const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}`
  const urlAPIHotmail = `mailto:${email}`
  const urlAPILinkedin = `https://www.linkedin.com/in/leandrogcruzp/`

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <MessageCircle />

        <div>
          <span>Whatsapp: +55 (42) 99825-6197</span>
          <Button outline={true} >
            <a target="_blank" rel="noopener noreferrer" href={urlAPIWhatsapp}>
              Contato
            </a>
          </Button>
        </div>

      </div>

      <div className={styles.grid}>
        <Linkedin />

        <div>
          <span>linkedin.com/in/leandrogcruzp</span>
          <Button outline={true} >
            <a target="_blank" rel="noopener noreferrer" href={urlAPILinkedin}>
              Contato
            </a>
          </Button>
        </div>
      </div>

      <div className={styles.grid}>
        <AtSign />

        <div>
          <span>leandro.programmer@hotmail.com</span>
          <Button outline={true} >
            <a target="_blank" rel="noopener noreferrer" href={urlAPIHotmail}>
              Contato
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
