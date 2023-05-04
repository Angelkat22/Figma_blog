import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'


function NavMenu({active, setActive}) {

// console.log(active)

    return (
        <div className={styles.nav_menu}>
            <div className={styles.nav_menu_item}> 
                <Link to='/'>Home</Link>
                <Link to='/works'>Works</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div onClick={()=>setActive(!active)} className={active ? styles.mobile_menu_active :  styles.mobile_menu}> 
                <div className={styles.line}></div>
                <div className={styles.line} ></div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

export default NavMenu