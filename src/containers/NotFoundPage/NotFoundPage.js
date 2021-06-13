import React from 'react'
import styles from './NotFoundPage.module.css'
import img from './img/download404.png'
import {useLocation} from "react-router";

const NotFoundPage = () => {
    let location = useLocation()
    return (
        <div>
            <img className={styles.img} src={img} alt="img"/>
            <p className={styles.text}>No match for {location.pathname}</p>
        </div>
    )
}
export default NotFoundPage