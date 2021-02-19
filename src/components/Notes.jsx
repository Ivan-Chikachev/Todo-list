import React, {useContext, useEffect, useState} from 'react';

const Notes = (props) => {

    return (
        <ul className={'list-group'}>
            {props.notes.map(note =>
                <li className='list-group-item note' key={note.name}>
                    <div>
                        <strong className={'mr-2'}>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </div>
                    <button
                        onClick={()=>{props.removeNote(note.name)}}
                        className='btn btn-outline-danger btn-sm note'>
                        &times;
                    </button>
                </li>)}
        </ul>
    )
}
export default Notes;