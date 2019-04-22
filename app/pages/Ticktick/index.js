import React from 'react';
import styled from 'styled-components';
import { Grid, Header, Icon, Image, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectMenuTaskListsTab } from './actions';

const listsMock = ['Today', 'Tomorrow', 'This Week', 'Someday'];
const tagsMock = ['chores', 'job', 'personal', 'sport'];
const customListsMock = ['custon1', 'custom2', 'custon3'];
const taskListsItems = [
  { name: 'Lists', id: 1 },
  { name: 'Tags', id: 2 },
  { name: 'Custom', id: 3 }];

const Wrapper = styled.div`
  background-color: black;
  
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .left .menu {
    display: flex !important;
    justify-content: space-evenly;
  }
  
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
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar/>
            <span>Username</span>
            <Icon name='search'/>
            <Icon name='mail'/>
          </Grid.Row>

          <Menu pointing secondary inverted>
            {Object.keys(taskListsItems).map(
              (name, key) => (
                <Menu.Item
                  key={taskListsItems[key].id}
                  active={taskListsItems[key].id === props.tasks_lists_selected_tab}
                  onClick={() => props.selectMenuTaskListsTab(taskListsItems[key].id)}
                >
                  {taskListsItems[key].name}
                </Menu.Item>
              ),
            )}
          </Menu>

          <Grid.Row className='lists_and_filters'>
            {[listsMock, tagsMock, customListsMock][props.tasks_lists_selected_tab - 1]
              .map((entry, key) => (
                <div className='list_entry' key={key}><Icon name='list'/>{entry}</div>
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

TickTick.propTypes = {
  tasks_lists_selected_tab: PropTypes.number,
  selectMenuTaskListsTab: PropTypes.func

}

const mapStateToProps = state => ({
  tasks_lists_selected_tab: state.ticktick.tasks_lists_selected_tab,
});

const mapDispatchToProps = dispatch => ({
  // setCounter: (value) => dispatch(setCounter(value)),
  selectMenuTaskListsTab: (index) => dispatch(selectMenuTaskListsTab(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TickTick);
