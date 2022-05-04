import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import ColorBox from './components/ColorBox';
import ColorForm from './components/ColorForm';

const colorList = [
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
  const [hexColor, setHexColor] = useState(colorList);

  function handleSubmit(newColor) {
    setHexColor([newColor, ...hexColor]);
  }
  return (
    <CardFlex>
      <ColorForm onSubmit={handleSubmit} />
      {hexColor.map(color => (
        <ColorBox key={color} color={color} />
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
