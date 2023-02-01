import React from 'react'
import styles from './Footer.module.css'
import logo from '../../images/logo_dark.png'

function Footer() {
  return (
    <div className={styles.footer}>
       <div className={styles.container} >
        <img src={logo} alt="/" />
        <button> Share A Car</button>
        </div> 
    </div>
  )
}

export default Footer