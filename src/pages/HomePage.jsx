import React from 'react'
import { movies } from '../data/movies'
import MovieList from '../components/MovieList/MovieList'

const HomePage = () => {
	return (
		<div>
			<h1>Now Showing</h1>
			<MovieList movies={movies} />
		</div>
	)
}

export default HomePage
