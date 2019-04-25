import styled from 'styled-components';

export const Wrapper = styled.span`
  padding: 1em 1em 0 1em;
  
  &:focus-within {
    .inputButtonBar {
      display: flex;
    }
    .input input {
      padding: 0.5em 7em 0.5em 0.5em;  
    }
  }
  
  .input input {
    background: black;
    color: white !important;
    border: 1px solid gray;
    border-radius: 1px;
    padding: 0.5em;
    &::placeholder {
      color: #ffffff;
    }
    
    &:focus {
      background: black;
      
      &::placeholder {
        color: #ffffff;
      }
    }
  }
`;
