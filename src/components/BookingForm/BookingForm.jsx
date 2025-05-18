import React, { useState, useContext } from 'react'
import { BookingContext } from '../../context/BookingContext'
import './BookingForm.css'

const BookingForm = () => {
	const { selectedSeats } = useContext(BookingContext)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	})

	const handleSubmit = e => {
		e.preventDefault()
		alert(`Booking confirmed for ${selectedSeats.length} seats!`)
	}

	return (
		<form onSubmit={handleSubmit}>
			<h3>Your Information</h3>
			<input
				type='text'
				placeholder='Name'
				required
				value={formData.name}
				onChange={e => setFormData({ ...formData, name: e.target.value })}
			/>
			<input
				type='email'
				placeholder='Email'
				required
				value={formData.email}
				onChange={e => setFormData({ ...formData, email: e.target.value })}
			/>
			<input
				type='tel'
				placeholder='Phone'
				required
				value={formData.phone}
				onChange={e => setFormData({ ...formData, phone: e.target.value })}
			/>
			<button type='submit' disabled={!selectedSeats.length}>
				Confirm Booking
			</button>
		</form>
	)
}

export default BookingForm
