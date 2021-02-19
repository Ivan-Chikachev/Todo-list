import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../types";


export const firebaseReducer = (state, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case ADD_NOTE:
            return {...state, notes: [...state.notes, action.note]};
        case FETCH_NOTES:
            return {...state,  loading: false, notes: action.note};
        case REMOVE_NOTE:
            return {...state, notes: state.notes.filter(note => note.name !== action.id), remove: true};
        default:
            return state
    }
}