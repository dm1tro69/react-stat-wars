import React from 'react'
import {useSelector} from "react-redux";
import styles from './FavoritePage.module.css'

const FavoritePage = () => {
    const storeData = useSelector((state => state.favoriteReducer))
    return (
        <div>FavoritePage</div>
    )
}
export default FavoritePage