import SectionHead from "./SectionHead";
import { FaQuestion } from "react-icons/fa";
import FAQ from "./FAQ";
import { faqs } from "../data";

const FAQs = () => {
	return (
		<section>
			<div className="faqs">
				<div className="container faqs__container">
					<SectionHead icon={<FaQuestion />} title="FAQs" />

					<div className="faq__wrapper">
						{faqs.map(({ id, question, answer }) => (
							<FAQ question={question} answer={answer} key={id} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQs;
