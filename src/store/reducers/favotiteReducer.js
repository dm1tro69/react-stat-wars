import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from "../actions";

const initialState = {

}

export const favoriteReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {...state}
        case REMOVE_PERSON_FROM_FAVORITE:
            return {...state}
        default:
            return state
    }
}