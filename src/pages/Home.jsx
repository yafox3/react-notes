import React, { useState } from 'react'
import Search from '../components/UI/Search/Search'

const Home = () => {
	const [search, setSearch] = useState('')

	function onSearch(event) {
		setSearch(event.target.value)
	}

	return (
		<>
			<h1 className='mb-4'><strong>Заметки</strong></h1>
			<Search onSearch={onSearch} value={search}/>
		</>

	)
}

export default Home
