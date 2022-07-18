import './App.css';
import Clock from './components/Clock';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">   
        <Clock />
      </div>
    </ChakraProvider>
  );
}

export default App;
