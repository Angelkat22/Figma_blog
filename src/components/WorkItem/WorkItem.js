import React from 'react'
import styles from './WorkItem.module.css'
import { NavLink } from 'react-router-dom'

function WorkItem(props) {
    
const {id, main_img, title, tags, year, text } = props

const link = `/works/${id}`
    return (
        
        <div className={styles.work_item}>
            <NavLink to={link}> 
            <div className={styles.work_item_image}>
                <img src= {main_img} alt={title}/>
            </div>
            </NavLink>
            <div className={styles.work_item_all_info}> 
            <NavLink to={link}> 
                <div className={styles.work_item_all_info_title}>
                    <h2>{title}</h2>
                </div>
                </NavLink>
                <div  className={styles.work_item_info}>
                    <p className={styles.work_item_info_year}>{year}</p>
                    <p className={styles.work_item_info_category}>{tags[0]} </p> 
                </div>
                <div> 
                    {text}
                </div>
        </div> 
        
    </div>

)
    
}

export default WorkItem