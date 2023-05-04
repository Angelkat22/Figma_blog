import React from 'react'
import styles from './WorkInfoPage.module.css'
import { work_data } from '../../data/data'
import { useParams } from 'react-router-dom'

function WorkInfoPage() {

    const { id } = useParams() 

    const { full_title, year, tags, text, content } = work_data[id]

    console.log(work_data)
    return (
        <div className="container"> 
            <div className={styles.info_page}>
                <h2 className={styles.info_page_title}>{full_title}</h2>
                <div className={styles.info_page_list}>
                    <p className={styles.info_page_year}>{year}</p>
                    <p className={styles.info_page_tag}>{tags.join(', ')}</p>
                </div>
                <p className={styles.info_page_text}>{text}</p>
                <div className={styles.info_page_content}>
                    {
                    content.map ((elem, index) =>{
                        if (elem[0]==='h1') {
                            return <h1 className={styles.content_head} key={index}>{elem[1]}</h1>
                        } else  if (elem[0]==='img') {
                            return <img src={elem[1]} alt={elem[0]} className={styles.content_img} key={index}/> 
                        } else if (elem[0] === 'h2') {
                            return <h2 className={styles.content_little_head} key={index}>{elem[1]}</h2>
                        } else if (elem[0] === 'text') {
                            return <p className={styles.content_text} key={index}>{elem[1]}</p>
                        }
                        })}
                </div>
            </div>
        </div>
        )
}

export default WorkInfoPage