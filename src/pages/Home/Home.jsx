import React, { useEffect, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import NotesList from '../../components/NotesList/NotesList'
import Search from '../../components/UI/Search/Search'
import styles from './Home.module.scss'

const Home = () => {
	const [notes, setNotes] = useState([])
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		setNotes(JSON.parse(localStorage.getItem('note')  || '[]'))
	}, [])

	const searchedNotes = useMemo(() => {
		return notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()))
	}, [searchQuery, notes])

	function onSearch(event) {
		setSearchQuery(event.target.value)
	}

	return (
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

			{searchedNotes.length === 0 
				? <h5 style={{textAlign: 'center'}}>Заметок не найдено</h5>
				: <NotesList notes={searchedNotes} />
			}

		</div>
	)
}

export default Home
