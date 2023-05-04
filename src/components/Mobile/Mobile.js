import React from 'react'
import styles from './Mobile.module.css'
import { Link } from 'react-router-dom'

function Mobile({active, setActive}) {
    return (
        
            <div className={active ? styles.mobile_active : styles.mobile}>
                <div className={styles.mobile_list}> 
                    <Link to='/' onClick={()=> setActive(!active)} >Home</Link>
                    <Link to='/works' onClick={()=> setActive(!active)} >Works</Link>
                    <Link to='/blog' onClick={()=> setActive(!active)} >Blog</Link>
                    <Link to='/contact' onClick={()=> setActive(!active)} >Contact</Link>
                </div>
            </div>
    )
}

export default Mobile