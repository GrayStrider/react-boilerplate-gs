import styled from 'styled-components';

export const Wrapper = styled.div`
  .checkbox *:before {
    border: 1px solid ${props => ["gray", "lightblue", "yellow", "red"][props.priority]} !important;
    border-radius: 2px !important;
    background-color: black !important;
  }
`;

//
