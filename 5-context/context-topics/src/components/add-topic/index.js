import React, {
	useState,
	useContext
} from "react";
import { TopicContext } from "../../topics-context";

export default function AddTopic() {
	const [name, setName] = useState("");
	const [duration, setDuration] = useState("");
	const [topics, setTopics] = useContext(TopicContext);
	return (
		<div>
			<form onSubmit={event => {
				event.preventDefault();
				setTopics(topics.concat({
					name: name,
					duration: duration
				}));
				setName("");
				setDuration("");
			}}>
				<input value={name} onChange={(event) => {
					setName(event.target.value);
				}}/>
				<input value={duration} onChange={(event) => {
					setDuration(event.target.value);
				}}/>
				<button>Add topic #{topics.length + 1}</button>
			</form>
		</div>
	);
}