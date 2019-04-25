import styled from 'styled-components';

export const Wrapper = styled.div`

   padding: 1em 1em 0 1em;
  
  .input input {
    height: 100%;
    background: black;
    color: white !important;
    border: 1px solid gray;
    border-radius: 1px;
    padding: 0 7.5em 0 0.5em;
    
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
