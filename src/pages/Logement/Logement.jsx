import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Slideshow from '../../components/Slideshow/Slideshow'
import Tag from '../../components/Tag/Tag'
import Rating from '../../components/Rating/Rating'
import data from '../../data/data'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../Error/Error'
import './logement.scss'

const Logement = () => {
	const { id } = useParams()

	// Trouver l'hébergement correspondant à l'id
	const logement = data.find((item) => item.id === id)
	console.log(logement)

	if (!logement) {
		return <Error />
	}

	const name = logement.host.name.split(' ')
	return (
		<div>
			<Header />
			<div className="logement">
				<Slideshow imageSlider={logement.pictures} />
				<div className="logement_content">
					<div className="logement_content_info">
						<h2 className="logement_content_info_title">
							{logement.title}
						</h2>
						<p className="logement_content_info_location">
							{logement.location}
						</p>
						<div className="logement_content_tag">
							{logement.tags.map((tag, index) => (
								<Tag key={index} tag={tag} />
							))}
						</div>
					</div>
					<div className="logement_content_host">
						<div>
							<div className="logement_content_host_name">
							<p>{name[0]}</p>
							<p>{name[1]}</p>
						</div>

						<img
							className="logement_content_host_picture"
							src={logement.host.picture}
							alt="profile de l'hôte"
						/>
						</div>

						<div className="logement_content_start">
							<Rating rating={logement.rating} />
						</div>
					</div>
				</div>
				<div className="logement_collapse">
					<div className="logement_collapse_items">
						<Collapse
							title={'Description'}
							content={logement.description}
						/>
					</div>
					<div className="logement_collapse_items">
						<Collapse
							title={'Equipement'}
							content={logement.equipments.map(
								(equipment, index) => (
									<div key={index}>{equipment}</div>
								),
							)}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Logement
