import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.taskIsSelected ? 'gray': 'none'};

  margin: 1em;
`;

//
