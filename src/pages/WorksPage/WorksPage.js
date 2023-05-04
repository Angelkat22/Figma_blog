import React from 'react'

import styles from './WorksPage.module.css'
import WorksContainer from '../../components/WorksContainer/WorksContainer'
import { work_data } from '../../data/data'
import WorkItem from '../../components/WorkItem/WorkItem'




function WorksPage() {
  return (
    <div className="container">
      <h1 className="page_title">Works</h1>
        <div className={styles.works_list}>
          {
            work_data.sort((a, b) => b.date - a.date).map((elem, index) => 
            <div className={styles.work_list_item} >
            <WorkItem key={index} {...elem} />
          </div>)
          }
        </div>
    </div>
    

  )
}

export default WorksPage