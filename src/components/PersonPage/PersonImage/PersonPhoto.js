import React from 'react'
import {useDispatch} from "react-redux";
import styles from './PersonPhoto.module.css'
import PropTypes from "prop-types";
import {removePersonFromFavorite, setPersonToFavorite} from "../../../store/actions";

const PersonPhoto = ({personPhoto, personName, personId}) => {
    const dispatch = useDispatch()
    const add = () => {
        dispatch(setPersonToFavorite())
    }
    const remove = () => {
        dispatch(removePersonFromFavorite())
    }
    return (
        <>
            <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt="img"/>
            </div>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </>
    )
}
export default PersonPhoto
PersonPhoto.propTypes = {
    personPhoto: PropTypes.string
}