import React from "react";
import "./imageLinkForm.css";

function ImageLinkForm({ detect, updateInput }) {
	return (
		<div className="imageLinkForm">
			<input className="input" onChange={(e) => updateInput(e)} />

			<button className="ilf_btn" onClick={detect}>
				Detect
			</button>
		</div>
	);
}

export default ImageLinkForm;
