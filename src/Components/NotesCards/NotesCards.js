import React, { useState, useEffect } from 'react'
import NotesCard from '../NotesCard/NotesCard';
import classes from './NotesCards.module.css';

const NotesCards = props => {
    const [notes, setNotes] = useState([])
    const changeFavorite = (event, index) => {
        event.stopPropagation();
        const oldNotes = [...notes];
        oldNotes[index].favorite = !oldNotes[index].favorite;
        setNotes(oldNotes);
    }

    const changeDescription = (event, index) => {
        const oldNotes = [...notes];
        oldNotes[index].description = event.target.value;
        setNotes(oldNotes);
    }
   
    
    useEffect(() => {
        const arr = [
            {
                title: "First title",
                timestamp: new Date(Date.now()).toUTCString(),
                description: "",
                favorite: false
            },
            {
                title: "Second title",
                timestamp: new Date(Date.now()).toUTCString(),
                description: "This is dSecond ecription",
                favorite: false
            }
        ]
        setNotes(arr);
        console.log('init');
    }, [])

 
    const AllNotesCards = 
    notes.map( (note, index) => 
        <div className={classes.NotesCard}
        key={index}
        >
        <NotesCard
        title={note.title}
        timestamp={note.timestamp}
        avatar={note.title[0]}
        description={note.description}
        favorite={note.favorite}
        changeFavorite={(event) => {changeFavorite(event, index)}}
        changeDescription={(event) => {changeDescription(event, index)}} 
        
    />
        </div> )
 
    return (
    <div className={classes.NotesCards}>
        {AllNotesCards}
    </div>
    )
}
export default NotesCards;