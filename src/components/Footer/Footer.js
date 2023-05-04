import React from 'react'
import styles from './Footer.module.css'
import fcbook from './Images/facebook.png'
import insta from './Images/insta.png'
import twit from './Images/twitter.png'
import linkedin from './Images/Linkedin.png'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className='container'> 
                <div className={styles.media}>
                    <img src={fcbook} alt='facebook' />
                    <img src={insta} alt='instagram' />
                    <img src={twit} alt='twitter' />
                    <img src={linkedin} alt='linkedin' />
                </div>
                <p className={styles.reserved}>Copyright ©2020 All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer