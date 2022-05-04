import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ColorBox from './components/ColorBox';
import ColorForm from './components/ColorForm';

const COLORLIST = [
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
  const [hexColors, setHexColor] = useState(COLORLIST);

  function handleSubmit(newColor) {
    const newColors = [newColor, ...hexColors];
    setHexColor(newColors);
    window.localStorage.setItem('colorList', JSON.stringify(newColors));
  }
  useEffect(() => {
    const locallySavedValue = window.localStorage.getItem('colorList');
    if (locallySavedValue !== null) {
      console.log('using local storage');
      setHexColor(JSON.parse(locallySavedValue));
    }
  }, []);

  return (
    <CardFlex>
      <ColorForm onSubmit={handleSubmit} />
      {hexColors.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
    </CardFlex>
  );
}

const CardFlex = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
