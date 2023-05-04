import React from 'react'
import styles from './PostsContainer.module.css'
import { blog_data } from '../../data/data'

import PostItem from '../PostItem/PostItem'


function PostsContainer() {

    const sorted_posts = blog_data.sort((a, b) => b.date - a.date).slice (0,2)

    return (
        <div className={styles.posts_container}>
            <div className={styles.posts_list} >
                {
                sorted_posts.map ((elem, index) => <PostItem title_home={'title_home'} item_home={'item_home'} key ={index} {...elem}/>)
                }
            </div>
        </div>
    )
}

export default PostsContainer