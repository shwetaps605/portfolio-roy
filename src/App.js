import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from 'styled-components'
import Theme from "./components/styled/Theme";
import Header from "./components/header/Header.component";
import Navbar from "./components/navbar/Navbar.component"; 
import Skills from "./components/skills/skills.component";

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <>
        <GlobalStyles/>
        <Navbar/>
        <Header/>
        <Skills/>
    </>
    </ThemeProvider>
    
  );
}
export default App;
