import "./App.css";
import axios from "axios";
function App() {
	const clicked = () =>
		axios({
			method: "POST",
			url: process.env.REACT_APP_URL,
			data: {
				ref: "main",
			},
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}`,
				"X-GitHub-Api-Version": "2022-11-28",
				Accept: "application/vnd.github.everest-preview+json",
			},
		});
	// const request = axios.post()
	return (
		<>
			<button onClick={clicked}> CLICK ME TO RUN </button>
		</>
	);
}

export default App;
