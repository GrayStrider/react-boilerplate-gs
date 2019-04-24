import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar-thumb {
    color: red;
    background-color: red;
  }
`;
