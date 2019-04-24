import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .left .menu {
    display: flex !important;
    justify-content: space-evenly;
  }
  
  .account_pane {
    padding: 5px;
    
    * {
      vertical-align: middle;
    }
    
    & .icon {
      float: right;
      margin-left: 12px;
      margin-top: 3px;
      
    }
  }
  
  & * {
    color: white;
  }
  
  & * .header {
    color: white;
    padding: 6px;
  }
  
  & .ui.grid {
    margin: 0;
    height: 100%;
    
    & .row {
      box-shadow: 0 1px 0 0 rgba(255,255,255,0.21);
    }
    
    & .column {
      padding: 0;
      box-shadow: 1px 0 0 0 rgba(255,255,255,0.21);
      height: 100%;
        

        }
      }
`;
