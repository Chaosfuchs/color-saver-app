import styled, { css } from 'styled-components';

export default function Box() {
  return (
    <StyledBox>
      <button>#fhfhdhsfd</button>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: green;
  border: 3px solid black;
`;
