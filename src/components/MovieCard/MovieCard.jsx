import React from 'react'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
	return (
		<div className='movie-card'>
			<img src={movie.posterUrl} alt={movie.title} />
			<h3>{movie.title}</h3>
			<p>{movie.description}</p>
			<span>{movie.genre}</span>
		</div>
	)
}

export default MovieCard
