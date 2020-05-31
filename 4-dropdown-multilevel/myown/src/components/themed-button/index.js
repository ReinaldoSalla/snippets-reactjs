import React from "react";
import { ThemeContext } from "../theme-context/";

export default class ThemedButton extends React.Component {
	render() {
		return (
			<button
				{...this.props}
				style={{backgroundColor: this.context.background}}
			/>
		);
	}
}

ThemedButton.contextType = ThemeContext;

