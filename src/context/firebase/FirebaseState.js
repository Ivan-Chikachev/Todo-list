import React, {useReducer} from 'react';
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../types";
import axios from "axios";

const url = 'https://react-app-todo-list-56e4a-default-rtdb.firebaseio.com'

export const FirebaseState = (props) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => {
        dispatch({type: SHOW_LOADER})
    }

    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)
        const notes = Object.keys(res.data).map(key => {
            return {...res.data[key], name: key}
        })
        dispatch({type: FETCH_NOTES, note: notes})
    }
    const addNote = async title => {
        const note = {
            title, date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/notes.json`, note)
            const notes = {...note, id: res.data.name}

            dispatch({type: ADD_NOTE, note: notes})
        } catch (e) {
            throw new Error(e.massage)
        }

    }
    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`)
        dispatch({
            type: REMOVE_NOTE,
            id: id
        })
    }
    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes, loading: state.loading,
            notes: state.notes
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}