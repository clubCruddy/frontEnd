import "./App.css";
import axios from "axios";
import React, { useState } from "react";
function App() {
	const [buttonStatus, setButtonStatus] = useState(false);
	const clicked = () => {
		setButtonStatus(true);
		return axios({
			method: "POST",
			url: process.env.REACT_APP_URL,
			crossDomain: true,
			data: {
				ref: "main",
			},
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}`,
				"X-GitHub-Api-Version": "2022-11-28",
				Accept: "application/vnd.github.everest-preview+json",
			},
		});
	};
	return (
		<>
			<div className="App-header">
				<button className={buttonStatus ? "App-logo Disabled":"App-logo"} disabled={buttonStatus} onClick={() => clicked()}>
					CLICK ME TO RUN
				</button>
				{buttonStatus}
			</div>
		</>
	);
}

export default App;
