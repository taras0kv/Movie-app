import React from 'react'
import SeatSelection from '../components/SeatSelection/SeatSelection'
import BookingForm from '../components/BookingForm/BookingForm'
import './BookingPage.css'

const BookingPage = () => {
	return (
		<div className='booking-page'>
			<h2>Book Your Seats</h2>
			<div className='booking-container'>
				<SeatSelection />
				<BookingForm />
			</div>
		</div>
	)
}

export default BookingPage
