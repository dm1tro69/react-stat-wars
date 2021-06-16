import React from 'react'
import {useDispatch} from "react-redux";
import styles from './PersonPhoto.module.css'
import PropTypes from "prop-types";
import {removePersonFromFavorite, setPersonToFavorite} from "../../../store/actions";
import iconFavorite from './img/star.svg'
import iconFavoriteFull from './img/star-full.svg'

const PersonPhoto = ({personPhoto, personName, personId, setPersonFavorite, personFavorite}) => {
    const dispatch = useDispatch()

    const dispatchFavoritePeople = ()=> {
        if (personFavorite){
            dispatch(removePersonFromFavorite(personId))
            setPersonFavorite(false)

        }else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }))
            setPersonFavorite(true)

        }
    }

    return (
        <>
            <div className={styles.container}>
            <img className={styles.photo} src={personPhoto} alt="img"/>

                <img
                    className={styles.favorite}
                    onClick={dispatchFavoritePeople}
                    src={personFavorite?iconFavoriteFull: iconFavorite}
                    alt="img"/>
            </div>



        </>
    )
}
export default PersonPhoto
PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personId: PropTypes.string,
    personName: PropTypes.string,
    setPersonFavorite: PropTypes.func,
    personFavorite: PropTypes.bool
}