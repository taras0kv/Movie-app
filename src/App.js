import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { movies } from './data/movies'
import HomePage from './pages/HomePage'
import BookingPage from './pages/BookingPage'
import Header from './components/Header/Header'
import { BookingProvider } from './context/BookingContext'
import './App.css'

function App() {
	return (
		<BookingProvider>
			<Router>
				<div className='app'>
					<Header />
					<Routes>
						<Route path='/' element={<HomePage movies={movies} />} />
						<Route path='/booking' element={<BookingPage />} />
					</Routes>
				</div>
			</Router>
		</BookingProvider>
	)
}

export default App
