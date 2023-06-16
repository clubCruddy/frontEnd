import "./App.css";
import axios from "axios";
import React, { useState } from "react";
function App() {
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const clicked = () => {
		setButtonDisabled(true);
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
				<button className={buttonDisabled ? "App-logo Disabled":"App-logo"} disabled={buttonDisabled} onClick={() => clicked()}>
					CLICK ME TO RUN
				</button>
				{buttonDisabled ? <div>REPORT RUN HAS BEEN TRIGGERED</div> : <></> }
			</div>
		</>
	);
}

export default App;
