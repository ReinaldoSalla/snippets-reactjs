import React from "react";

const Form = () => {
	const [inputs, setInputs] = React.useState({
		name: "",
		age: "",
		profession: ""
	});
	const nameRef = React.useRef(null);
	const ageRef = React.useRef(null);
	const professionRef = React.useRef(null);
	const submitRef = React.useRef(null);

	React.useEffect(() => {
		nameRef.current.focus();
	}, []);

	const onChange = event => {
		setInputs({
			...inputs,
			[event.target.name]: event.target.value
		});
	};

	const onKeyDownName = event => {
		if (event.key === "Enter") ageRef.current.focus();
	};

	const onKeyDownAge = event => {
		if (event.key === "Enter") professionRef.current.focus();
	};

	const onKeyDownProfession = event => {
		if (event.key === "Enter") submitRef.current.focus();
	};

	const onSubmit = () => {
		alert(`Are you sure?\nName: ${inputs.name}\nAge: ${inputs.age}\nProfession: ${inputs.profession}`);
	};
	
	return (
		<React.Fragment>
			<label>
				Name:
				<input
					placeholder="e.g. Reinaldo"
					name="name"
					value={inputs.name}
					ref={nameRef}
					onChange={onChange}
					onKeyDown={onKeyDownName}
				/>
			</label>
			<label>
				Age:
				<input
					placeholder="e.g. 25"
					name="age"
					value={inputs.age}
					ref={ageRef}
					onChange={onChange}
					onKeyDown={onKeyDownAge}
				/>
			</label>
			<label>
				Profession:
				<input
					placeholder="e.g. Software Developer"
					name="profession"
					value={inputs.profession}
					ref={professionRef}
					onChange={onChange}
					onKeyDown={onKeyDownProfession}
				/>
			</label>
			<button 
				ref={submitRef}
				onClick={onSubmit}
			>
				Submit
			</button>
		</React.Fragment>
	);
};

const App = () => (
	<Form />
);

export default App;
