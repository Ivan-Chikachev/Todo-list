import React, {useReducer} from 'react';
import {AlertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertState = (props) => {
    const [state, dispatch] = useReducer(alertReducer, {visible: false})
    const show = (text, type = 'warning') => {
        dispatch({
            type: SHOW_ALERT,
            text: text,
            typeAlert: type
        })
    }
    const hide = () => {dispatch({type: HIDE_ALERT,})}

    return (
        <AlertContext.Provider value={{show, hide,alert: state }}>
            {props.children}
        </AlertContext.Provider>
    )
}