import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import icon from './img/bookmark.svg'
import styles from './Favorite.module.css'
import {Link} from "react-router-dom";

const Favorite = () => {
    const [count ,setCount] = useState(0)
    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(()=> {
        const length = Object.keys(storeData).length
        length.toString().length > 2? setCount('...'): setCount(length)

    })

    return (
        <div className={styles.container}>
           <Link exact to="/favorites">
               <span className={styles.counter}>{count}</span>
               <img className={styles.icon} src={icon} alt="img"/>
           </Link>

        </div>
    )
}
export default Favorite
