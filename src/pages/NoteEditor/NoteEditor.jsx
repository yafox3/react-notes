import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LocalStorage from '../../utils/localstorage'
import styles from './NoteEditor.module.scss'

const NoteEditor = () => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')

	function createNote() {
		if (title && text) {
			const newNote = {
				id: new Date(),
				title,
				body: {
					date: new Date().toLocaleDateString(),
					text
				}
			}
			
			const notes = LocalStorage.get('note')
			notes.push(newNote)
			LocalStorage.post('note', notes)
		}
	}

	return (
		<div className={styles.editor}>
			<header className={styles.editor__header}>
				<NavLink
					to='/'
					className='btn btn-danger'>
					<i className='bi bi-caret-left'></i>
				</NavLink>
				<h1>
					<strong>Редактор</strong>
				</h1>
				{text && title ? (
					<NavLink
						to='/'
						className='btn btn-success'
						onClick={createNote}>
						<i className='bi bi-save'></i>
					</NavLink>
				) : (
					<button
						className='btn btn-success'
						disabled
					>
						<i className='bi bi-save'></i>
					</button>
				)}
			</header>

			<div className={styles.editor__form}>
				<div className='mb-3'>
					<label
						htmlFor='title'
						className='form-label'>
						Введите название
					</label>
					<input
						onChange={e => setTitle(e.target.value)}
						value={title}
						type='text'
						className='form-control'
						id='title'
						placeholder='Название заметки'
					/>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='text'
						className='form-label'>
						Введите текст
					</label>
					<textarea
						onChange={e => setText(e.target.value)}
						value={text}
						className='form-control'
						id='text'
						rows='6'
						placeholder='Текст заметки'></textarea>
				</div>
			</div>
		</div>
	)
}

export default NoteEditor
