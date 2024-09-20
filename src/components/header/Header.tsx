'use client'

import { formatCurrentDate } from '@/utils/formatCurrentData'
import Image from 'next/image'
import React, { memo } from 'react'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/images/logo.png" width={150} height={36} alt="logo" />

      <h1>Bem-vindo de volta, Marcus</h1>

      <p>{formatCurrentDate()}</p>
    </header>
  )
}

export default memo(Header)
