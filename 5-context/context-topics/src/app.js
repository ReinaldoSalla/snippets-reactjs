import React from "react";
import { TopicProvider } from "./topics-context";
import NavBar from "./components/nav-bar/";
import TopicList from "./components/topic-list/";
import AddTopic from "./components/add-topic/";

export default function App() {
	return (
		<TopicProvider>
			<div>
				<NavBar /> <hr />
				<AddTopic /> <hr />
				<TopicList />
			</div>
		</TopicProvider>
	);
}

