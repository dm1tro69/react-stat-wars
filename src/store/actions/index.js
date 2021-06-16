
export const ADD_PERSON_TO_FAVORITE = 'ADD_PERSON_TO_FAVORITE'
export const REMOVE_PERSON_FROM_FAVORITE = 'REMOVE_PERSON_FROM_FAVORITE'

export const setPersonToFavorite = (name) => {
    return {
        type: ADD_PERSON_TO_FAVORITE,
        payload: name
    }
}
export const removePersonFromFavorite = (name) => {
    return {
        type: REMOVE_PERSON_FROM_FAVORITE,
        payload: name
    }
}