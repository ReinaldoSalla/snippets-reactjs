export default function ConsoleLog(props) {
	if (Array.isArray(props.children)) {
		let text = "";
		props.children.forEach(child => text += child);
		console.log(text);
	} else {
		console.log(props.children);
	}
	return false;
}
