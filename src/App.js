import React, { useMemo, useContext } from "react";
import { ThemeProvider, StyledThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes/";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
    };
    function setState(newState) {
      this.state = {
        ...currentState,
        ...newState,
      };
    }
  }
  render() {
    const { theme } = this.state;
    console.log(this.state)
    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        {/* <StyledThemeProvider theme={themes[theme] || themes.dark}> */}
        <GlobalStyle />
        <Layout onToggleTheme={()=>{this.setState({theme:'light'})}} selectedTheme={theme} />
        {/* </StyledThemeProvider> */}
      </ThemeProvider>
    );
  }
}
// export const App = () => {
//   const [theme, setTheme] = useState("dark");
//   const currentTheme = useMemo(() => {
//     themes[theme] = themes['dark'] = themes.theme = themes.dark
//     return themes[theme] || themes.dark;
//   }, [theme]);
//   function handleToggleTheme() {
//     setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
//   }

//   return (
//     <ThemeProvider>
//       <StyledThemeProvider theme={currentTheme}>
//         <GlobalStyle />
//         <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
//       </StyledThemeProvider>
//     </ThemeProvider>
//   );
// };
