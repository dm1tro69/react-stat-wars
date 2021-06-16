
export const ADD_PERSON_TO_FAVORITE = 'ADD_PERSON_TO_FAVORITE'
export const REMOVE_PERSON_FROM_FAVORITE = 'REMOVE_PERSON_FROM_FAVORITE'

// export const setPersonToFavorite = (person) => {
//     return {
//         type: ADD_PERSON_TO_FAVORITE,
//         payload: person
//     }
// }
export const setPersonToFavorite = (person) => {

    return {
        type: ADD_PERSON_TO_FAVORITE,
        payload: person
    }
}

export const removePersonFromFavorite = (personId) => {
    return {
        type: REMOVE_PERSON_FROM_FAVORITE,
        payload: personId
    }
}