import './App.css';
import ColorCard from './components/ColorCard';
import { useState } from 'react';
import styled from 'styled-components';
import ColorForm from './components/ColorForm';

const COLORS = [
  '#F72585',
  '#B5179E',
  '#7209B7',
  '#560BAD',
  '#480CA8',
  '#3A0CA3',
  '#3F37C9',
  '#4361EE',
  '#4895EF',
  '#4CC9F0',
];

export default function App() {
  const [hexColor, setHexColor] = useState(COLORS);
  function handleSubmit(newColor) {
    setHexColor([newColor, ...hexColor]);
  }
  return (
    <>
      <h1>Color Saver App</h1>
      <CardGrid>
        <ColorForm onSubmit={handleSubmit} />
        {hexColor.map(color => (
          <ColorCard color={color} />
        ))}
      </CardGrid>
    </>
  );
}

const CardGrid = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
  align-items: center;
  gap: 20px;
`;
