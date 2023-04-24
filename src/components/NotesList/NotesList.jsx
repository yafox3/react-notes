import React from 'react'
import Note from '../Note/Note'
import styles from './NotesList.module.scss'

const NotesList = ({notes, editNote, removeNote}) => {
	return (
		<div className={styles.notes}>
			{notes.map((note) => 
				<Note removeNote={removeNote} editNote={editNote} note={note} key={note.id}/>
			)}
		</div>
	)
}

export default NotesList
