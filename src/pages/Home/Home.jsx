import React, { useMemo, useState } from 'react'
import NotesList from '../../components/NotesList/NotesList'
import Search from '../../components/UI/Search/Search'
import styles from './Home.module.scss'

const Home = () => {
	const [notes, setNotes] = useState([
		{id: 1, title: 'Первая', body: { date: new Date().toLocaleDateString(), text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.' }},
		{id: 2, title: 'Вторая', body: { date: new Date().toLocaleDateString(), text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.' }},
		{id: 3, title: 'Третья', body: { date: new Date().toLocaleDateString(), text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.' }},
	])
	const [searchQuery, setSearchQuery] = useState('')

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
				<button 
					className='btn btn-warning'
				>
					Написать <i className="bi bi-pencil-square"></i>
				</button>
			</div>
			<Search onSearch={onSearch} value={searchQuery}/>

			{searchedNotes.length === 0 
				? <h5 style={{textAlign: 'center'}}>По вашему запросу ничего не найдено</h5>
				: <NotesList notes={searchedNotes} />
			}

		</div>
	)
}

export default Home
