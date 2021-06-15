import React from 'react'
import loader from './img/loader1.svg'
import styles from './UiLoading.module.css'

const UiLoading = () => {
    return (
        <div>
            <img className={styles.loader} src={loader} alt="loader"/>
        </div>
    )
}
export default UiLoading