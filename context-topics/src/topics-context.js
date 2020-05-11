import React, {
	useState,
	createContext
} from "react";

export const TopicContext = createContext();

export function TopicProvider(props) {
	const [topics, setTopics] = useState([
		{
			name: "Context API",
			duration: "3 days"
		},
		{
			name: "HTML",
			duration: "30 days"
		},
		{
			name: "CSS",
			duration: "30 days"
		}
	]);
	return (
		<TopicContext.Provider value={[topics, setTopics]}>
			{props.children}
		</TopicContext.Provider>
	);
}