import { ReactNode, ButtonHTMLAttributes } from 'react'

import styles from '../styles/Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean
  children: ReactNode
}

export function Button({ outline = false, children, ...props }: ButtonProps) {
  return (
    <div className={styles.container}>
      <button className={!outline ? '' : styles.outlined} {...props}>
        {children}
      </button>
    </div>
  )
}
