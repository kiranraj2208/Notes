import React, { useState, useEffect } from 'react'
import NotesCard from '../NotesCard/NotesCard';
import classes from './NotesCards.module.css';
import CreateNoteDialog from '../CreateNoteDialog/CreateNoteDialog';
import axios from '../../axios-notes';
import Spinner from '../../UI/Spinner/Spinner';

const NotesCards = props => {
    const [notes, setNotes] = useState([]);
    const [user, setUser] = useState('kiran')
    const [loading, setLoading] = useState(false);
    const [note, setNote] = useState({
        title: '',
        timestamp: new Date(Date.now()).toString().slice(0, 25),
        favorite: false,
        description: '',
    });

    const [alertTitle, setAlertTitle] = useState({p:null});


    const changeFavorite = (event, index, id) => {
        event.stopPropagation();
        const oldNotes = [...notes];
        oldNotes[index].favorite = !oldNotes[index].favorite;
        setNotes(oldNotes);
        const {title, favorite, timestamp, description} = oldNotes[index];
        axios.put(`/notes/${user}/${id}.json`, {
            title,
            favorite,
            timestamp,
            description
        }).then(response => {
            
            console.log('favorite changed');
        })
        
        

    }

    const changeDescription = (event, index) => {
        const oldNotes = [...notes];
        oldNotes[index].description = event.target.value;
        setNotes(oldNotes);
    }

    const deleteNote = (event, id) => {
        console.log('deleting notes')
        event.stopPropagation();
        setLoading(true);
        axios.delete(`/notes/${user}/${id}.json`)
        .then(response => {
            setNotes( notes.filter( ele => id !== ele.id) );
            console.log('deleted');
            setLoading(false);
        })
    }

    const titleChangeHandler = (event) => {
        const newNote = {...note};
        const newTitle = event.target.value;
        console.log('title: change' + event.target.value);
        newNote.title = newTitle;
        console.log('title chage handler')
        setNote(newNote);
        if (newTitle.length === 0) {
            setAlertTitle({p:"Title too short"});
            return;
        }
        for(let i of notes){
            if(newTitle === i.title){
                setAlertTitle({p:"Duplicate title..."});
                return;
            }
        }
        setAlertTitle({p:null});
        // setAlertTitle({p: null});
    }
   
    const updateDescription = (index, id) => {
        const { title, favorite, timestamp, description } = notes[index];
        setLoading(true);
            axios.put(`/notes/${user}/${id}.json`, {
                title,
                favorite,
                timestamp,
                description
            }).then(response => {
                console.log('updated')
                setLoading(false);
            })
    }
    
    useEffect(() => {
        const arr = [];
        setLoading(true);
        axios.get(`notes/${user}.json`)
        .then( response => {
            if (response.data !== null) {
            const keys = Object.keys(response.data);
            console.log(keys);
            keys.map( (key) => {
                const newNote = response.data[key];
                newNote.id = key;
                arr.push(newNote);
                console.log('init');
                setLoading(false);
            })
                setNotes(arr);
            console.log(arr);
        }
        })
        
    }, [])

    const createNote = () => {
        const arr = [...notes];
        setLoading(true);
        axios.post(`/notes/${user}.json`, note)
        .then(response => {
            console.log(response);
            note.id = response.data.name;
            console.log(response.data.name);
            arr.push(note);
            console.log(note);
            setNotes(arr);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }

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
        id={note.id}
        index={index}
        updateDescription={updateDescription}
        changeFavorite={(event) => {changeFavorite(event, index, note.id)}}
        changeDescription={(event) => {changeDescription(event, index)}} 
        deleteNote={(event) => {deleteNote(event, note.id)}}
    />
        </div> )
 
    return (
    <div className={classes.NotesCards}>
        {AllNotesCards}
        <Spinner loading={loading}/>
        <CreateNoteDialog
        alertTitle={alertTitle}
        createNote={createNote}
        note={note}
        titleChangeHandler={titleChangeHandler}/>
    </div>
    )
}
export default NotesCards;