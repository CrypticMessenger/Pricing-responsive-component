import { ChakraProvider } from '@chakra-ui/react';

import MidComponent from './MidComponent'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <MidComponent />
    </ChakraProvider>
  );
}

export default App;
