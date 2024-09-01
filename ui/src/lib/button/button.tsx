'use client';
import styled from 'styled-components';

const StyledButton = styled.div`
  color: pink;
`;

export function Button() {
  return (
    <StyledButton>
      <h1>Welcome to Button!</h1>
    </StyledButton>
  );
}

export default Button;
