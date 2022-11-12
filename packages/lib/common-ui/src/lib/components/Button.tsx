import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <StyledButton>
      button
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  color: pink;
`;