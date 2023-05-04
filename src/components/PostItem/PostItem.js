import React from 'react'
import styles from './PostItem.module.css'

function PostItem (props) {

const { title, tags, date, text, item_home, title_home } = props

const newDate = new Date(date)
const setdDate = newDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

    return (
    
        <div className={`${styles.item} ${styles[item_home]}`}>
            <div className={`${styles.item_title} ${styles[title_home]}`}>
                {title}
            </div>
            <div  className={styles.item_all_info}>
                <p>{setdDate}</p>
                <p>|</p>
                <p className={styles.item_all_info_tag}>{tags.join(',  ')}</p>
            </div>
            <p className={styles.item_description}>{text}</p>
        </div>
        
    )
    }
    export default PostItem