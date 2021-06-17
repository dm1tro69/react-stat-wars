import React from 'react'
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import Favorite from "../Favorite/Favorite";

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink exact to="/not-found">Not Found</NavLink></li>
            </ul>
            <Favorite/>



        </div>
    )
}
export default Header