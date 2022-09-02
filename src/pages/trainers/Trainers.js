import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Trainers.css";
import Trainer from "../../components/Trainer";

const Trainers = () => {
	return (
		<>
			<Header image={HeaderImage} title="Our Trainers">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis obcaecati
				consequatur sed vero velit accusamus?
			</Header>
			<section className="trainers">
				<div className="container trainers__container">
					{trainers.map(({ id, image, name, job, socials }) => (
						<Trainer
							image={image}
							name={name}
							job={job}
							socials={[
								{ icon: <BsInstagram />, link: socials[0] },
								{ icon: <AiOutlineTwitter />, link: socials[1] },
								{ icon: <FaFacebookF />, link: socials[2] },
								{ icon: <FaLinkedinIn />, link: socials[3] },
							]}
							key={id}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Trainers;
