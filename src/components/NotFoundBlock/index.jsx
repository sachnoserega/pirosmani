import React from "react";
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
    return ( 
        <div className={styles.root}>
            <span>:)</span>
  
        <h1>Ничего не найдено</h1>
        <p className={styles.text}> К сожалению данный товар не найден на нашем сайте</p>
        </div>
     );
}
 
export default NotFoundBlock;