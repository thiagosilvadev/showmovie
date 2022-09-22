import styled, { keyframes } from 'styled-components'

const loading = keyframes`
    0% {
        left: -45%;
    }
    100% {
        left: 100%;
    }
`

export const Loader = styled.div`
  position: absolute;
  left: -45%;
  height: 100%;
  width: 45%;
  background-image: linear-gradient(
    to left,
    rgba(50, 59, 84, 0.05),
    rgba(50, 59, 84, 0.3),
    rgba(50, 59, 84, 0.6),
    rgba(50, 59, 84, 0.3),
    rgba(50, 59, 84, 0.05)
  );
  animation: ${loading} 1s infinite;
`
