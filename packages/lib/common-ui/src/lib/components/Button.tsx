import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonUiProps {}

const StyledButton = styled.button`
  color: pink;
`;

export function Button(props: StyledButton) {
  return (
    <StyledButton>
      button
    </StyledButton>
  );
}

export default Button;
