import React from "react";
import "./register.css";

function Register() {
	return (
		<div className="register">
			<div className="form_field">
				<div className="left_field">
					<div className="input_box">
						<div className="form_input_descriptor">name:</div>
						<input className="form_input" />
					</div>

					<div className="input_box">
						<div className="form_input_descriptor">email:</div>
						<input className="form_input" type="email" />
					</div>

					<div className="input_box">
						<div className="form_input_descriptor">password:</div>
						<input className="form_input" type="password" />
					</div>
				</div>

				<div className="divider"></div>

				<div className="right_field"></div>
			</div>
		</div>
	);
}

export default Register;
