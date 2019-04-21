import React from 'react';
import styled from 'styled-components';
import { Grid, Header } from 'semantic-ui-react';

const Wrapper = styled.div`
  background-color: black;
  
  display: flex;
  flex-direction: column;
  height: 100%;
  
  & * .header {
    color: white;
    background-color: black;
  }
  
  & .ui.grid {
    margin: 0;
    height: 100%;
    
    & .column {
      box-shadow: 1px 0 0 0 rgba(255,255,255,0.21);
        
        & .row {
          background-color: white !important;
          & .header {
            color: white;
          }
        }
      }
    }
  }
  
`;

function TickTick(props) {
  return (
    <Wrapper>
      <Grid columns='equal'>
        <Grid.Column className='left' width={4}>
          <Header>Left</Header>
        </Grid.Column>

        <Grid.Column className='center' width={7}>
          <Grid.Row>
            <Header>Center</Header>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column className='right' width={5}>
          <Header>Right</Header>
        </Grid.Column>

      </Grid>
    </Wrapper>
  );
}

export default TickTick;
