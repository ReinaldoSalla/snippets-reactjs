import React, { useContext } from "react";
import { TopicContext } from "../../topics-context";
import Topic from "../topic/";

export default function TopicList() {
	const [topics] = useContext(TopicContext);
	return (
		<div>
			{topics.map((topic, index) => 
				<Topic name={topic.name} duration={topic.duration} key={index} />
			)}
		</div>
	);
}

