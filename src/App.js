import { Container } from "./components/styled/Container.styled"
import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from 'styled-components'
import Theme from "./components/styled/Theme";
import Header from "./components/Header.component";
import Navbar from "./components/navbar/Navbar.component"; 

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <>
        <GlobalStyles/>
        <Navbar/>
        <Header/>
        
    </>
    </ThemeProvider>
    
  );
}
export default App;
