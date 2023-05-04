import React from 'react'
import PostsContainer from '../../components/PostsContainer/PostsContainer'
import styles from './BlogPage.module.css'
import { blog_data } from '../../data/data'
import PostItem from '../../components/PostItem/PostItem'

function BlogPage() {
    return (
    
            <div className="container">
				<h1 className="page_title">Blog</h1>
                <div className={styles.blog_list}>
                    {
                    blog_data.sort((a, b) => b.date - a.date).map((elem, index) => 
                    <div className={styles.blog_list_item} >
                        <PostItem key={index} {...elem} />
                    </div>)}
                
                </div>
			</div>
        
    )
}

export default BlogPage