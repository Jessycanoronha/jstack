import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes/";
export default class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }
  state = {
    theme: "dark",
  };
 
  //posso substituir por arrow function, pois ele tem seu próprio objeto this
  handleToggleTheme() {
      this.setState(prevState => ({
        theme: prevState.theme === "dark" ? "light" : "dark",
    }));
  }
  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout onToggleTheme={this.handleToggleTheme} selectedTheme={theme} />
      </ThemeProvider>
    );
  }
}
