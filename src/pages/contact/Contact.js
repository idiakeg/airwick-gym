import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.css";

const Contact = () => {
	return (
		<>
			<Header image={HeaderImage} title="Get In Touch">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum deleniti
				natus dolores perferendis nemo eligendi?
			</Header>
			<section className="contact">
				<div className="container contact__container">
					<div className="contact__wrapper">
						<a
							href="mailto:idiakeg@gmail.com"
							target="__blank"
							rel="noreferrer noopener"
						>
							<MdEmail />
						</a>
						<a
							href="https://m.me/idiakose.gbenga"
							target="__blank"
							rel="noreferrer noopener"
						>
							<BsMessenger />
						</a>
						<a
							href="https://wa.me/+2348092164680"
							target="__blank"
							rel="noreferrer noopener"
						>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
