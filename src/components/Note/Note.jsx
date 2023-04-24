import React from 'react'
import styles from './Note.module.scss'

const Note = ({ note, editNote, removeNote}) => {
	return (
		<div className={styles.note}>
			<div className={styles.note__tools}>
				<i onClick={() => editNote(note)} className="bi bi-pencil-fill"></i>
				<i onClick={() => removeNote(note)} className="bi bi-x-square-fill"></i>
			</div>
			<h2 className={styles.note__title}>{note.title}</h2>
			<div className={styles.note__body}>
				<span className={styles.body__date}>{note.body.date}</span>
				<span className={styles.body__text}>{note.body.text}</span>
			</div>
		</div>
	)
}

export default Note
