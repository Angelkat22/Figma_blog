import React from 'react'
import styles from './Info.module.css'

function Info() {
    return (
        <div className={styles.info}> 
            <div className={styles.info_container}>
                <div className={styles.info_about_me}>
                        <h1 className="page_title">Hi, I am John, <br />Creative Technologist</h1>
                        <p  className={styles.info_text}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className={styles.info_photo}>
                        <img src='/images/photo.png' alt='young man' />
                </div>
            </div>
            <div className={styles.info_btn}> 
                <button>Download Resume</button>
            </div>
            
            
        </div>
    )
    }

export default Info