import React from 'react'
import styles from './NotesList.module.scss'
import Note from '../Note/Note'

const NotesList = ({notes}) => {
	return (
		<div className={styles.notes}>
			{notes.map((note) => 
				<Note title={note.title} body={note.body} key={note.id}/>
			)}
		</div>
	)
}

export default NotesList
