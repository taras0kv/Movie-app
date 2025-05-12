import React from 'react'
import { movies } from './data/movies'
import MovieList from './components/MovieList/MovieList'

function App() {
	return (
		<div className='App'>
			<h1>Cinema Booking</h1>
			<MovieList movies={movies} />
		</div>
	)
}

export default App
