import React from "react";
import "./faceRecognition.css";
import groupIcon from "../../../Resources/groupIcon.png";

function FaceRecognition({ image }) {
	return (
		<div className="face_recognition">
			{image === null ? (
				// <img alt="group icon" src={groupIcon} className="fReg_placeholder" />
				<div style={{ fontSize: 250 }}></div>
			) : (
				<img alt="group img" src={image} className="fReg_groupImage" />
			)}
		</div>
	);
}

export default FaceRecognition;
