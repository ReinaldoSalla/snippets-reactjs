import React from "react";

function ConsoleLog(props) {
	if (Array.isArray(props.children)) {
		let text = "";
		props.children.forEach(child => text += child);
		console.log(text);
	} else {
		console.log(props.children);
	}
	return false;
}

export default function App() {
	const [progrLang, setProgrLang] = React.useState("js");
	const name = "Reinaldo";
	const age = 25;
	const profession = "Software Developer";
	React.useEffect(() => {
		setProgrLang("typescript");
	}, []);
	return (
		<div>
			<ConsoleLog>
			  {name} {age} {profession} {progrLang} hello world
			</ConsoleLog>
		</div>
	)
}


