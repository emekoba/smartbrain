import React from "react";
import "./logo.css";
import Tilt from "react-tilt";
import brain from "../../Resources/brain.png";

function Logo() {
	return (
		<Tilt
			className="Tilt"
			options={{ max: 25 }}
			style={{ height: 100, width: 100 }}
		>
			<div className="logo">
				<div className="Tilt-inner">
					<img alt="brain" src={brain} />
				</div>
			</div>
		</Tilt>
	);
}

export default Logo;
