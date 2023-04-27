import React, { useEffect, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Details from '../../components/Details/Details'
import NotesCounter from '../../components/NotesCounter/NotesCounter'
import NotesList from '../../components/NotesList/NotesList'
import Search from '../../components/UI/Search/Search'
import LocalStorage from '../../utils/localstorage'
import styles from './Home.module.scss'

const Home = ({ editNote, currentNote, setClear }) => {
	const [notes, setNotes] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [show, setShow] = useState(false)

	useEffect(() => {
		setNotes(LocalStorage.get('note'))
	}, [])

	const searchedNotes = useMemo(() => {
		return notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
	}, [searchQuery, notes])

	function onSearch(event) {
		setSearchQuery(event.target.value)
	}

	function removeNote(note) {
		LocalStorage.remove('note', note.id)
		setNotes(LocalStorage.get('note'))
	}

	function hideModal() {
		setShow(false)
		setClear(false)
	}

	function showModal() {
		setShow(true)
	}

	return (
		<>
			<Details note={currentNote} show={show} hideModal={hideModal}/>

			<div className={styles.home}>
				<div className={styles.home__header}>
					<h1><strong>Заметки</strong></h1>
					<NavLink
						to='/editor'
						className='btn btn-dark'
					>
						<i className="bi bi-pencil-square"></i>
					</NavLink>
				</div>
				<Search onSearch={onSearch} value={searchQuery}/>
	
				<div className={styles.home__notes}>
					{searchedNotes.length === 0 
						? <h5 style={{textAlign: 'center'}}>Заметок не найдено</h5>
						: <NotesList showModal={showModal} removeNote={removeNote} editNote={editNote} notes={searchedNotes} /> 
					}
				</div>
				{searchedNotes.length > 0 && <NotesCounter />}
			</div>
		</>
	)
}

export default Home
