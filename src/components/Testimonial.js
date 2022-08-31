import { useState } from "react";
import { testimonials } from "../data";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";

const Testimonial = () => {
	const [index, setIndex] = useState(0);
	const { name, avatar, job, quote } = testimonials[index];

	const handleNextTestimonial = () => {
		let newIndex = index + 1;
		// if (newIndex > testimonials.length - 1) return;
		setIndex((prev) => prev + 1);
		if (newIndex > testimonials.length - 1) {
			setIndex(0);
		}
	};

	const handlePrevTestimonial = () => {
		let newIndex = index - 1;
		// if (newIndex < 0) return;
		setIndex((prev) => prev - 1);
		if (newIndex < 0) setIndex(testimonials.length - 1);
	};

	return (
		<section className="testimonials">
			<div className="container testimonials__container">
				<SectionHead
					icon={<ImQuotesLeft />}
					title="Testimonials"
					className="testimonials__head"
				/>
				<Card className="testimonial">
					<div className="testimonial__avatar">
						<img src={avatar} alt={name} />
					</div>
					<p className="testimonial__quote">{name}</p>
					<h5>{`"${quote}"`}</h5>
					<small className="testimonial__title">{job}</small>
				</Card>
				<div className="testimonials__btn-container">
					<button className="testimonials__btn" onClick={handlePrevTestimonial}>
						<IoIosArrowDropleftCircle />{" "}
					</button>
					<button className="testimonials__btn" onClick={handleNextTestimonial}>
						<IoIosArrowDroprightCircle />{" "}
					</button>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
