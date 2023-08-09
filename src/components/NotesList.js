import AddNote from "./AddNote";
import Note from "./Note";
import React, { useState } from "react";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
    return ( 
    <div className='notes-list'>
        <AddNote handleAddNote={handleAddNote}/>
        {notes.map((note)=> (
            <Note 
                id={note.id} 
                header={note.header} 
                text={note.text} 
                date={note.date}
                handleDeleteNote={handleDeleteNote}
                handleEditNote={handleEditNote}
            />
        ))}
        
    </div>
    );
};

export default NotesList;