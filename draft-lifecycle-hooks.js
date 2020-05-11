import React, {
	useState,
	useEffect,
} from "react";

export default function App() {
	const [numClicks, setNumClicks] = useState(0);

	// runs every time
	useEffect(() => {
		console.log("useEffect with this as second parameter: empty");
	});

	// runs only the first time
	useEffect(() => {
		console.log("useEffect with this as second parameter: []")
	}, []);

	return (
		<div>
			<button onClick={() => {
				setNumClicks(numClicks + 1);
			}}>
				click #{numClicks+1}
			</button>
		</div>
	)
}