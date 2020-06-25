import { Button } from "react-bootstrap";
import styled, { css } from "styled-components";

// TODO --- get hover styles from ProductCard
// TODO --- create a LIGHT version and a DARK version

const StyledButton = styled(Button)`
  ${props =>
    props.light
      ? css`
          border: 2px solid ${props => props.theme.primaryAccent};
          color: ${props => props.theme.primaryAccent};
          background: rgba(255, 255, 255, 0);

          &:hover {
            background: ${props => props.theme.primaryAccent};
            color: white;
          }
        `
      : css`
          border: 1px solid ${props => props.theme.primaryAccent};
          color: ${props => props.textHover || props.theme.primaryAccent};
          background: rgba(255, 255, 255, 0);

          &:hover {
            background: ${props => props.theme.primaryAccent};
            color: black !important;
            border: 1px solid ${props => props.theme.primaryAccent} !important;
            background-color: ${props => props.theme.primaryAccent};
            ${css`
              transition: 400ms ease-in-out background;
              transition: 400ms ease color;
            `}
          }
        `}
`;

const ButtonDark = styled(StyledButton)`
  background: ${props => props.theme.dark};
  color: ${props => props.theme.darkText};
`;

const ButtonAlt = styled(StyledButton)`
  border: 2px solid black;
  color: ${props => props.theme.lightText};
  &:hover {
    color: ${props => (props.textHover ? props.textHover : "white !important")};
    background-color: black;
    ${css`
      transition: 400ms ease-in-out background;
      transition: 400ms ease color;
    `}
  }
`;

export default StyledButton;

export { ButtonDark, StyledButton, ButtonAlt };
