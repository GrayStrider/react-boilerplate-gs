import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1em 1em 0 1em;
  
  .input input {
    background: black;
    color: white !important;
    border: 1px solid gray;
    border-radius: 1px;
    
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
