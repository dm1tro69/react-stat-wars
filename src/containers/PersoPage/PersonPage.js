import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {getApiResource} from "../../utils/network";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";
import styles from './PersonPage.module.css'
import {API_PERSON} from "../../constants/api";

const PersonPage = ({match, setErrorApi}) => {
    const [personInfo, setPersonInfo] = useState(null)
    const [personName, setPersonName] = useState(null)
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
            }else {
                setErrorApi(true)
            }
        })()
    }, [])

    return (
        <>
            {personName}
            {personInfo && (
                <ul>
                    {personInfo.map(({title, data})=> (
                       data && (<li key={title}><span>{title}: {data}</span></li>) 
                    ))}
                </ul>
            )}
        </>
    )
}
export default withErrorApi(PersonPage)
PersonPage.propTypes = {
    match: PropTypes.object.isRequired,
    setErrorApi: PropTypes.func
}