import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
// import styles from './PeoplePage.module.css'
import {getApiResource} from "../../utils/network";
import {API_PEOPLE} from "../../constants/api";
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";
import PeopleList from "../../components/PeoplePage/PeopleList/PeopleList";
import {withErrorApi} from "../../hoc-helpers/withErrorApi";


const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null)
    const getResource = async (url) => {
        const res = await getApiResource(url)

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    name,
                    id,
                    img
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }

    }
    useEffect(() => {
        getResource(`${API_PEOPLE}`)
    }, [])
    return (
        <>
            <h1 className={'header__text'}>Navigation</h1>
            {people && <PeopleList people={people}/>}
        </>
    )
}
export default withErrorApi(PeoplePage)
PeoplePage.propTypes = {
    setErrorApi: PropTypes.func.isRequired
}