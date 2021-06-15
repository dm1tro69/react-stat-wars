import React, {useEffect, useState} from 'react'
import {makeConcurrentRequest, changeHTTP} from "../../../utils/network";
import styles from './PersonFilms.module.css'
import PropTypes from "prop-types";

const PersonFilms = ({personFilms}) => {
    const [filmsName, setFilmsName] = useState([])
    useEffect(()=> {
        (async ()=> {
          const filmsHttps = personFilms.map(url => changeHTTP(url))
            const response = await makeConcurrentRequest(filmsHttps)
            setFilmsName(response)
        })()
    }, [])
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName.sort((a, b)=> a.episode_id - b.episode_id).map(({title, episode_id}) =>
                    <li className={styles.list__item} key={title}>
                        <span className={styles.item__episode}>Episode {episode_id}</span>
                        <span className={styles.item__colon}>:</span>
                        <span className={styles.item__title}>{title}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default PersonFilms
PersonFilms.propTypes = {
    personFilms: PropTypes.array
}