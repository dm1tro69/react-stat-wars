import React from 'react'
import PropTypes from 'prop-types'
import styles from './PeopleList.module.css'

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({id, name, img}) => {

                return (
                    <li className={styles.list__item} key={id}>
                        <a href="#">
                            <img className={styles.person__photo} src={img} alt="img"/>
                            <p>{name}</p>
                        </a>

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