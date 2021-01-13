import "./home.css";
import FaceRecognition from "./FaceRecognition/FaceRecognition";
import ImageLinkForm from "./ImageLinkForm/ImageLinkForm";
import Clarifai from "clarifai";
import group from "../../Resources/group.jpg";
import { useState } from "react";

function Home() {
	const token = "acdf25495cc34422ad36b7019d9d226f";

	const app = new Clarifai.App({ apiKey: token });

	const [img, setimg] = useState(
		"https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
	);

	function detectFace() {
		app.models.predict(Clarifai.COLOR_MODEL, group).then(
			function (response) {
				console.log(response);
			},
			function (error) {}
		);
	}

	function updateInput(e) {
		setimg(e.target.value);
	}

	return (
		<div className="Home">
			<p style={{ fontSize: "20px" }}>
				Smart Brain will detect faces in images..give it a link to try it out.
			</p>

			<div className="ilf_fReg">
				<ImageLinkForm detect={detectFace} updateInput={updateInput} />

				<FaceRecognition image={img} />
			</div>
		</div>
	);
}

export default Home;
