import styled, { css, keyframes } from 'styled-components'

// Animation for making the overlay pulse for the cover page
const pulse = keyframes`
from {
  background: rgba(0, 0, 0, 0.6);
}
to {
  background: rgba(0, 0, 0, 0.2);
}
`

const DarkOverlay = styled.div`
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  z-index: 2;

  animation: 3s ${pulse} linear infinite alternate;

  ${(props) =>
    css`
      min-height: ${props.height};
    `}
`

export default DarkOverlay
