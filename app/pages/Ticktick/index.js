import React from 'react';
import styled from 'styled-components';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';

const listsMock = ['Today', 'Tomorrow', 'This Week', 'Someday'];

const Wrapper = styled.div`
  background-color: black;
  
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .list_entry {
    margin: 0.5em;
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
        

        }
      }
`;

function TickTick(props) {
  return (
    <Wrapper>
      <Grid columns='equal'>
        <Grid.Column className='left' width={4}>
          <Grid.Row className='account_pane'>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
            <span>Username</span>
            <Icon name='search'/>
            <Icon name='mail'/>
          </Grid.Row>



          <Grid.Row className='lists_and_filters'>
            {listsMock.map((entry) => (
              <div className='list_entry'><Icon name='list'/>{entry}</div>
            ))}
          </Grid.Row>
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
