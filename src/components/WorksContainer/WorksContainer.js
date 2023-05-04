import React from 'react'
import styles from './WorksContainer.module.css'
import WorkItem from '../WorkItem/WorkItem'
import { work_data } from '../../data/data'




function WorksContainer() {
    
const sortedWorks = work_data.sort((a, b) => b.year - a.year).slice(0, 3)
    return (

        <div className= {styles.works_container}>
        
            <div className={styles.works_list}>
                {
                sortedWorks.map ((elem, index )=> <WorkItem 
                                                        key ={index} 
                                                        {...elem}/>)
                }
            </div>
        </div>
    )
}

export default WorksContainer