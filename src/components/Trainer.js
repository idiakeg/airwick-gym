import React from "react";
import Card from "../UI/Card";

const Trainer = ({ image, job, socials, name }) => {
	return (
		<Card className="trainers">
			<div className="trainers__img">
				<img src={image} alt={name} />
			</div>
			<h3>{name}</h3>
			<p>{job}</p>
			<div className="trainer__socials">
				{socials.map(({ icon, link }, index) => (
					<a href={link} key={index} target="_blank" rel="noopener noreferrer">
						{icon}
					</a>
				))}
			</div>
		</Card>
	);
};

export default Trainer;
