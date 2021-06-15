import React, {useEffect, useState, Suspense} from 'react'
import PropTypes from 'prop-types'
import {getApiResource} from "../../utils/network";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import styles from './PersonPage.module.css'
import {API_PERSON} from "../../constants/api";
import {getPeopleImage} from "../../services/getPeopleData";
import PersonPhoto from "../../components/PersonPage/PersonImage/PersonPhoto";
import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";
import UiLoading from "../../components/UI-Kit/UiLoading/UiLoading";
// import PersonFilms from "../../components/PersonPage/PersonFilms/PersonFilms";

const PersonFilms = React.lazy(()=> import("../../components/PersonPage/PersonFilms/PersonFilms"))

const PersonPage = ({match, setErrorApi}) => {
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
    const [personPhoto, setPersonPhoto] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    useEffect(()=> {
        (async ()=> {
            const id = match.params.id
            const res = await getApiResource(`${API_PERSON}/${id}/`)
            if (res){
                setErrorApi(false)
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ])
                setPersonName(res.name)
                setPersonPhoto(getPeopleImage(id))



                res.films.length && setPersonFilms(res.films)

                setErrorApi(false)
            }else {
                setErrorApi(true)
            }
        })()
    }, [])

    return (
        <>

            <PersonLinkBack/>
        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>
            <div className={styles.container}>
                <PersonPhoto personPhoto={personPhoto}/>

                {personInfo && (
                    <PersonInfo personInfo={personInfo}/>
                )}
                {personFilms && (
                    <Suspense fallback={<UiLoading/>}>
                        <PersonFilms personFilms={personFilms}/>

                    </Suspense>

                ) }
            </div>

        </div>
        </>
    )
}
export default withErrorApi(PersonPage)
PersonPage.propTypes = {
    match: PropTypes.object.isRequired,
    setErrorApi: PropTypes.func
}