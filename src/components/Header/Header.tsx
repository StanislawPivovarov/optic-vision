import React from "react";

import styles from './styles.module.scss'
import Image from "next/image";
import logo from '@/assets/logo.png'

const Header = () => {
 return(
  <div className={styles.header}>
   <div className={styles.logo_wrap}>
    <Image className={styles.logo} src={logo} alt="logo"/>
    <p className={styles.name}>OpticVision</p>
   </div>
  </div>
 )
}

export default Header;
