import React from "react";

const themes = {
	light: {
		foregroung: "#000000",
		background: "#eeeeee"
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222"
	}
};

const ThemeContext = React.createContext({
	theme: themes.dark,
	toggleTheme: () => {}
});

function ThemeTogglerButton() {
	return (
		<ThemeContext.Consumer>
			{({theme, toggleTheme}) => (
				<button
					onClick={toggleTheme}
					style={{backgroundColor: theme.background}}
				>
					Toggle Theme
				</button>
			)}
		</ThemeContext.Consumer>
	);
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.toggleTheme = () => {
			this.setState(state => ({
				theme: state.theme === themes.dark
					? themes.light
					: themes.dark,
			}));
		};
		this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme
		};
	}

	render() {
		const name = "Reinaldo";
		return (
			<ThemeContext.Provider value={this.state}>
				<div>
					<ThemeTogglerButton />
				</div>
			</ThemeContext.Provider>
		);
	}
}

