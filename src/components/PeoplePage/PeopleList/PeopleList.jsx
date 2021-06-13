import React from 'react'
import PropTypes from 'prop-types'
import styles from './PeopleList.module.css'
import {Link} from "react-router-dom";

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({id, name, img}) => {

                return (
                    <li className={styles.list__item} key={id}>
                        <Link to={`/people/${id}`}>
                            <img className={styles.person__photo} src={img} alt="img"/>
                            <p>{name}</p>
                        </Link>

                    </li>
                )
            })}
        </ul>
    )
}
export default PeopleList
PeopleList.propTypes = {
    people: PropTypes.array.isRequired
}