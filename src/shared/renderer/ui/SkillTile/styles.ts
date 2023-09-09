import styled from 'styled-components'

const Container = styled.button`
  width: 2rem;
  height: 2rem;
  position: relative;
  display: flex;
  border: 1px solid black;
  border-radius: 0.25rem;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.25s;
  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const Icon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  width: 90%;
  height: 90%;
`

export { Container }
