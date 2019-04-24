import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.selected ? 'gray': 'none'};

  margin: 1em;
  
  .checkbox {
    vertical-align: sub;
    margin-right: 0.8em;
    
    & *:before {
    border: 1px solid ${props => ["gray", "lightblue", "yellow", "red"][props.completed ? 0 : props.priority]} !important;
    border-radius: 2px !important;
    background-color: black !important;
    }
  
    & *:after {
      color: white !important;
      font-size: 19px !important;
      top: -2px !important;
      
    }
  }
`;

//
