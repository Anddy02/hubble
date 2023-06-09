import {ThemeProvider} from 'styled-components'
import GlobalStyles from './components/styles/Global';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import {Container} from "./components/styles/Container.styled";
import content from './content';


const theme = {
  colors: {
    header:'#ebfbff',
    body:'#fff',
    footer:'#003333',
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container> 
          {content.map((item, index)=>
            <Card key={index} item={item}></Card>
          )}
        </Container>
        <Footer />
      </>
      
    </ThemeProvider>
  
  );
}

export default App;

