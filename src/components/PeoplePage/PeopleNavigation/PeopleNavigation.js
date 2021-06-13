import React from 'react'
import {Link} from "react-router-dom";
import UiButton from "../../UI-Kit/UiButton/UiButton";
import styles from './PeopleNavigation.module.css'
import PropTypes from "prop-types";

const PeopleNavigation = ({counterPage, getResource, nextPage, prevPage}) => {
    const handleChangeNext = () => {
        return getResource(nextPage)
    }
    const handleChangePrev = () => {
        return getResource(prevPage)
    }
    return (
        <div className={styles.container}>
           <Link className={styles.link} to={`/people/?page=${counterPage-1}`}>
              <UiButton
                  text={'Previous'}
                  onClick={handleChangePrev}
                  disabled={!prevPage}

              />
           </Link>
            <Link className={styles.link} to={`/people/?page=${counterPage+1}`}>

                <UiButton
                    text={'Next'}
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    )
}
export default PeopleNavigation
PeopleNavigation.propTypes = {
    counterPage: PropTypes.number.isRequired,
    getResource: PropTypes.func.isRequired,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
}