import React, {
	useContext
} from "react";
import { TopicContext } from "../../topics-context";

export default function NavBar() {
	const [topics] = useContext(TopicContext);
	return (
		<div>
			<h1>These are the topics to practice</h1>
			<h2>Number of topics: {topics.length}</h2>
		</div>
	);
}

