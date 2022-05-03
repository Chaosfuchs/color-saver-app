import styled from 'styled-components';

export default function ColorCard({ color }) {
  return (
    <StyledCard color={color}>
      <button onClick={handleClick}>{color}</button>
    </StyledCard>
  );
  function handleClick() {
    navigator.clipboard.writeText(color);
  }
}
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${props => props.color};
  border: 2px solid black;
  border-radius: 15px;

  button {
    padding: 8px 14px;
    background-color: #eee;
    border-radius: 8px;
    cursor: pointer;
  }
`;
