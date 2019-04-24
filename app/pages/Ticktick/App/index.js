import React from 'react';
import { Grid, Header, Icon, Image} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Wrapper } from './styles';
import Lists from '../components/Lists';
import TaskList from '../components/TaskList';
import InputNewTask from '../components/InputNewTask';
import TaskDetails from '../components/TaskDetails';

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

          <Lists/>

        </Grid.Column>

        <Grid.Column className='center' width={6}>
          <InputNewTask/>
          <TaskList/>
        </Grid.Column>

        <Grid.Column className='right' width={6}>
          <TaskDetails/>
        </Grid.Column>

      </Grid>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  placeholder: state.ticktick.placeholder,
});

const mapDispatchToProps = dispatch => ({
  // setCounter: (value) => dispatch(setCounter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TickTick);
