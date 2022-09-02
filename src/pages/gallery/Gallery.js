import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";
import "./Gallery.css";

const Gallery = () => {
	// const galleryLength = 15
	let images = [];
	for (let i = 1; i <= 15; i++) {
		images.push(require(`../../images/gallery${i}.jpg`));
	}

	console.log(images);

	return (
		<>
			<Header image={HeaderImage} title="Gallery">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis optio
				maxime temporibus sunt laborum deleniti.
			</Header>
			<section className="gallery">
				<div className="container gallery__container">
					{images.map((image, index) => (
						<article key={index}>
							<img src={image} alt={`Gallery ${index + 1}`} />
						</article>
					))}
				</div>
			</section>
		</>
	);
};

export default Gallery;
