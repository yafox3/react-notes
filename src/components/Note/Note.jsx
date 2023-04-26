import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Note.module.scss'

const Note = ({ note, editNote, removeNote, showModal }) => {
	return (
		<div 
			className={styles.note} 
			onClick={() => {
				showModal()
				return editNote(note)
			}}
		>
			<div className={styles.note__tools}>
				<NavLink to='/editor' className={styles.edit}>
					<i onClick={() => editNote(note)} className="bi bi-pencil-fill"></i>
				</NavLink>
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
