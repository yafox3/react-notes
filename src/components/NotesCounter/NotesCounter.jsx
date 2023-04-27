import React from 'react'
import LocalStorage from '../../utils/localstorage'
import styles from './NotesCounter.module.scss'

const NotesCounter = () => {
	const count = LocalStorage.get('note').length

	return (
		<div className={styles.notes__counter}>
			<p className='text-dark'>Заметок: {count}</p>
		</div>
	)
}

export default NotesCounter
