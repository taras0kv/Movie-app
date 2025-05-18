import React, { createContext, useState } from 'react'

export const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
	const [selectedSeats, setSelectedSeats] = useState([])

	return (
		<BookingContext.Provider value={{ selectedSeats, setSelectedSeats }}>
			{children}
		</BookingContext.Provider>
	)
}
