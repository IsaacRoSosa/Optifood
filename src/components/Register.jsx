import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Register.module.css'

function Register() {
  return (
    <div className={styles.container}>
    <div className={styles.background}></div>
    <div className={styles.content}>
    
        <h1 className={styles.title}>WELCOME TO <br />OPTIFOOD</h1>
        <h2 className={styles.sub}>Where every ingredient counts</h2>
        <button className={styles.button}>
          <span>LETS GET STARTED</span>
        </button>
    </div>
</div>
  )
}

export default Register