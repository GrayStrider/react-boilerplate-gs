import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 0.5em 0.5em 0.5em;
  .label {
  margin-top: 0.5em;
    &:hover {
      & + .icon {
        display: inline;
      }
    }
  }
  .icon {
    &:hover {
      display: inline;
    }
    display: none;
    position: relative;
    top: -5px;
    margin-left: -1em;
    border-radius: 50%;
  }
`;
