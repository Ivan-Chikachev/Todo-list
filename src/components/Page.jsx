import React, {useContext, useEffect, useState} from 'react';
import Form from "./Form";
import Notes from "./Notes";
import Alert from "./Alert";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import Loader from "./Loader";

const Page = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);
    useEffect(() => {
      fetchNotes()
    }, [])
    return (
        <>
            <Alert alert={alert}/>
            <Form />

            <hr/>
            {loading?<Loader/>:<Notes notes={notes} removeNote={removeNote}/>}
        </>
    )
}
export default Page;