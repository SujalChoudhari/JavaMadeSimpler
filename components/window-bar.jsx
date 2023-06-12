import React from 'react';
import styles from '../styles/window.module.css';
const WindowBar = () => {

    return <>
        <div className={styles['window-bar']}>
            <div className={styles['window-dots']}>
                <div className={styles['dot']}></div>
                <div className={styles['dot']}></div>
                <div className={styles['dot']}></div>
            </div>
        </div></>

}

export default WindowBar;