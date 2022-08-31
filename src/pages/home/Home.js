import "./Home.css";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonial from "../../components/Testimonial";

const Home = () => {
	return (
		<>
			<MainHeader />
			<Programs />
			<Values />
			<FAQs />
			<Testimonial />
		</>
	);
};

export default Home;
