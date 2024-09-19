import type { Button as ButtonProps } from '@/types'
import React from 'react'
import styles from './button.module.scss'
import { interTight } from '@/fonts'

const Button = ({ title, onClick, type = 'primal' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[type]} ${interTight.className}`}
    >
      {title}
    </button>
  )
}

export default Button
