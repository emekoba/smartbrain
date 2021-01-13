import React from "react";
import "./header.css";
import Logo from "./Logo/Logo";

function Header({ route, changeRoute }) {
	let username = "Russell";
	let rank = 5;

	return (
		<div className="header">
			<Logo />

			<div className="header_text">
				{route === "home" && (
					<>
						{username}, your current rank is #{rank}
					</>
				)}

				{route === "login" && <>LOGIN</>}

				{route === "register" && <>REGISTER</>}
			</div>

			<div>
				<button className="nav_btn" onClick={changeRoute}>
					{route === "home" ? "sign out" : "register"}
				</button>
			</div>
		</div>
	);
}

export default Header;
