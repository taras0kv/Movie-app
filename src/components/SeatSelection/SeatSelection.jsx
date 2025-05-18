import React, { useContext } from 'react'
import { BookingContext } from '../../context/BookingContext'
import './SeatSelection.css'

const SeatSelection = () => {
	const { selectedSeats, setSelectedSeats } = useContext(BookingContext)

	// Генеруємо місця (10x10)
	const seats = Array(10)
		.fill()
		.map((_, row) =>
			Array(10)
				.fill()
				.map((_, num) => ({
					id: `${row}-${num}`,
					row,
					number: num + 1,
					booked: Math.random() < 0.2, // 20% шанс що місце заброньоване
				}))
		)

	const handleSelect = seat => {
		if (seat.booked) return

		setSelectedSeats(prev =>
			prev.some(s => s.id === seat.id)
				? prev.filter(s => s.id !== seat.id)
				: [...prev, seat]
		)
	}

	return (
		<div className='seat-map'>
			<div className='screen'>Screen</div>
			{seats.map((row, i) => (
				<div key={i} className='seat-row'>
					{row.map(seat => (
						<div
							key={seat.id}
							className={`seat ${
								seat.booked
									? 'booked'
									: selectedSeats.some(s => s.id === seat.id)
									? 'selected'
									: 'available'
							}`}
							onClick={() => handleSelect(seat)}
						>
							{seat.number}
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default SeatSelection
