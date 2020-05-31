import React from "react";
import { ThemeContext, themes } from "../theme-context/";
import ThemedButton from "../themed-button/";

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change theme
    </ThemedButton>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: theme.light };
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark
          ? theme.light
          : themes.dark
      }));
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemedButton />
        </div>
      </div>
    );
  }
}