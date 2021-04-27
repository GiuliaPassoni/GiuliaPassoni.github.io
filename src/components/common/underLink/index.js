import styled from 'styled-components';

export const UnderLink = styled.a`
  cursor: pointer;
  transition: color 300ms ease-in-out;
  font-family: "PTSans-Bold", sans-serif;
  color: #9ad6fe;
  padding: 0 .5rem;
  &:hover {
    color: #ffa9a3;
    text-decoration: underline;
  }
`