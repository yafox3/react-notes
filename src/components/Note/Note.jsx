import React from 'react'
import styles from './Note.module.scss'

const Note = ({title, body}) => {
	return (
		<div className={styles.note}>
			<h2 className={styles.note__title}>{title}</h2>
			<div className={styles.note__body}>
				<span className={styles.body__date}>{body.date}</span>
				<span className={styles.body__text}>{body.text}</span>
			</div>
		</div>
	)
}

export default Note
