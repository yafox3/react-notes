import React from 'react'
import './Search.scss'

const Search = ({onSearch, value}) => {
  return (
	<div className="input-group mb-3">
		<span className="input-group-text bg-white" ><i className="bi bi-search"></i></span>
		<input
			value={value}
			onChange={onSearch}
			type="text" 
			className="form-control" 
			placeholder='Поиск'
		/>
	</div>
  )
}

export default Search
