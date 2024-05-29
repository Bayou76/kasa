import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa' // Importation des icônes
import './slideshow.scss'

export default function Slider({ imageSlider }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => {
		setCurrentIndex(currentIndex + 1)
		if (currentIndex === imageSlider.length - 1) setCurrentIndex(0)
	}

	const prevSlide = () => {
		setCurrentIndex(currentIndex - 1)
		if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1)
	}

	return (
		<section
			style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
			className="slide"
		>
			{imageSlider.length > 1 && (
				<>
					<FaChevronRight
						className="slide_arrow slide_arrow_right"
						onClick={nextSlide}
					/>
					<FaChevronLeft
						className="slide_arrow slide_arrow_left"
						onClick={prevSlide}
					/>
					{imageSlider.length > 1 && (
						<div className="slideNB">{`${currentIndex + 1}/${imageSlider.length}`}</div>
					)}
				</>
			)}
		</section>
	)
}
