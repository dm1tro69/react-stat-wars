import React from 'react'
import {useHistory} from "react-router-dom";
import icon from './img/back.svg'
import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
    const history = useHistory()
    const handleGoBack = (e) => {
      e.preventDefault()
        history.goBack()
    }
    return (
        <a
            href={'#'}
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={icon} alt="img"/>
            <span>Go Back</span>
        </a>
    )
}
export default PersonLinkBack