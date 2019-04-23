import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 1em;
  
  
  .checkbox {
    vertical-align: sub;
    margin-right: 0.8em;
  
    & *:before {
    border: 1px solid ${props => ["gray", "lightblue", "yellow", "red"][props.priority]} !important;
    border-radius: 2px !important;
    background-color: black !important;
    }
  
    & *:after {
      color: white !important;
    }
  }
`;

//
