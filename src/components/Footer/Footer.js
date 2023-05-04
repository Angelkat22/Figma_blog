import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className='container'> 
                <div className={styles.media}>
                    <img src='/images/facebook.png' alt='facebook' />
                    <img src='/images/insta.png' alt='instagram' />
                    <img src='/images/twitter.png' alt='twitter' />
                    <img src='/images/linkedin.png' alt='linkedin' />
                </div>
                <p className={styles.reserved}>Copyright ©2020 All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer