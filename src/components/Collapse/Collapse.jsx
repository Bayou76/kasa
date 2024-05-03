import React from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import './collapse.scss'

const Collapse = ({ title, content }) => {
	const [isOpen, setIsOpen] = React.useState(false)

	const toggleCollapse = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="collapse">
			<div className="collapse_header" onClick={toggleCollapse}>
				<h3 className="collapse_header_title">{title}</h3>
				{isOpen ? (
					<FaAngleDown className="collapse_header_arrow" />
				) : (
					<FaAngleUp className="collapse_header_arrow" />
				)}
			</div>
			<div className={isOpen ? "collapse_content" : "collapse_hidden"}>
				{content}
			</div>
		</div>
	)
}

export default Collapse
