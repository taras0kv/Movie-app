import React, { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({ movies }) => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className='movie-list'>
			<input
				type='text'
				placeholder='Search movies...'
				onChange={e => setSearchTerm(e.target.value)}
			/>
			{movies
				.filter(movie =>
					movie.title.toLowerCase().includes(searchTerm.toLowerCase())
				)
				.map(movie => (
					<MovieCard key={movie.id} movie={movie} />
				))}
		</div>
	)
}

export default MovieList
