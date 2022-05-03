import './App.css';
import Box from './components/Box';
import { useState, useEffect } from 'react';

const colorList = [
  {
    id: 0,
    hexColor: '#F72585',
  },
  {
    id: 1,
    hexColor: '#B5179E',
  },
  {
    id: 2,
    hexColor: '#7209B7',
  },
  {
    id: 3,
    hexColor: '#560BAD',
  },
  {
    id: 4,
    hexColor: '#480CA8',
  },
  {
    id: 5,
    hexColor: '#3A0CA3',
  },
  {
    id: 6,
    hexColor: '#3F37C9',
  },
  {
    id: 7,
    hexColor: '#4361EE',
  },
  {
    id: 8,
    hexColor: '#4895EF',
  },
  {
    id: 9,
    hexColor: '#4CC9F0',
  },
];

function App() {
  const [hexColor, setHexColor] = useState('#000000');
  return (
    <div className="App">
      <h1>Color Saver App</h1>
      <Box hexcolor={hexColor} setHexColor={setHexColor} />
      <Box />
      <Box />
    </div>
  );
}

export default App;
