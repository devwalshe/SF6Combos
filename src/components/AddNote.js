import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const [noteHeader, setNoteHeader] = useState('');

    const characterLimit = 10000;

    const handleHeaderChange = (event) => {
        setNoteHeader(event.target.value);
    };

    const handleTextChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if (noteHeader.trim().length > 0 && noteText.trim().length > 0) {
            handleAddNote(noteHeader, noteText);
            setNoteHeader('');
            setNoteText('');
        }
    };

    const handleCancelEditClick = () => {
        setNoteHeader('');
        setNoteText('');
    };

    return (
        <div className="note new">
            <textarea 
                rows="1" 
                cols="10" 
                placeholder="Note Title"
                value={noteHeader}
                onChange={handleHeaderChange}
            ></textarea>
            <textarea 
                rows="8" 
                cols="10" 
                placeholder="Enter combo notation here (i.e. 236 HK + 22 KK...)"
                value={noteText}
                onChange={handleTextChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="cancelEdit" onClick={handleCancelEditClick}>Cancel Edit</button>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;
