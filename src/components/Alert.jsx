import React, {useContext, useEffect, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";


const Alert = () => {
    const {alert, hide} = useContext(AlertContext)
    if (!alert.visible) {
        return null
    }
    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <strong className={'mr-2'}>Внимание!</strong>
            {alert.text}
            <button
                onClick={hide}
                className={'close'}
                type={'button'}
                aria-label={'Close'}>
                <span aria-hidden={'true'}>&times;</span>
            </button>
        </div>
    )
}
export default Alert;