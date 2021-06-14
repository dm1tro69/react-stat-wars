import React from 'react'
import styles from './PersonPhoto.module.css'
import PropTypes from "prop-types";

const PersonPhoto = ({personPhoto}) => {
    return (
        <>
            <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt="img"/>
            </div>
        </>
    )
}
export default PersonPhoto
PersonPhoto.propTypes = {
    personPhoto: PropTypes.string
}