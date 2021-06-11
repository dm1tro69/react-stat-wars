import React, {useEffect, useState} from 'react'
import styles from './PeoplePage.module.css'
import {getApiResource} from "../../utils/network";
import {SWAPI_PEOPLE, SWAPI_ROOT} from "../../constants/api";


const PeoplePage = () => {
    const [people, setPeople] = useState(null)
    const getResource = async (url) => {
        const res = await getApiResource(url)

        const peopleList = res.results.map(({name, url}) => {
            return {
                name,
                url
            }
        })
        setPeople(peopleList)
    }
    useEffect(() => {
        getResource(`${SWAPI_ROOT}${SWAPI_PEOPLE}`)
    }, [])
    return (
        <>
            {people &&
            (<ul>
                {people.map(({name, url}) => {
                    return (
                        <li key={name}>{name}</li>
                    )
                })}
            </ul>)
            }

        </>
    )
}
export default PeoplePage