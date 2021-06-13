import React from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/people">People</NavLink></li>
                <li><NavLink exact to="/not-found">Not Found</NavLink></li>
            </ul>


        </div>
    )
}
export default Header