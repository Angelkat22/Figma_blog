import React from 'react'
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'

import Info from '../../components/Info/Info'
import PostsContainer from '../../components/PostsContainer/PostsContainer'
import WorksContainerHome from '../../components/WorksContainer/WorksContainer'
import WorksContainer from '../../components/WorksContainer/WorksContainer'


function HomePage() {

    return (
        <div> 
            
            <section className={styles.about}>
                <div className="container"> 
                    <Info />  
                </div>
            </section>
            <section className={styles.posts_list}> 
                <div className="container"> 
                    <div className={styles.posts_list_title}>
                        <h2 className="title">Recent posts</h2>
                        <Link className={styles.posts_list_nav} to="/blog">View all</Link>
                    </div>
                    <PostsContainer />
                </div>
            </section>
            <section className={styles.works_list}> 
                <div className="container"> 
                    <div className={styles.works_list_title}>
                        <h2 className="title">Featured works</h2>
                    </div>
                    <WorksContainer /> 
                </div>
            </section>
        </div>
        
    )
}

export default HomePage