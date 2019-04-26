import React, {useState} from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Lists from '../components/Lists';
import TaskList from '../components/TaskList';
import InputNewTask from '../components/InputNewTask';
import TaskDetails from '../components/TaskDetails';

function TickTick(props) {
  const {selectedList} = props
  const [leftMenuOpened, openLeftMenu] = useState(false);

  return (
    <Wrapper menuOpened={leftMenuOpened}>
      <Grid columns={3}>
        <Grid.Column
          onClick={() => openLeftMenu(!leftMenuOpened)}
          className='left'>
          <Grid.Row className='account_pane'>
            <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar/>
            <span>Username</span>
            <Icon name='search'/>
            <Icon name='mail'/>
          </Grid.Row>

          <Lists/>

        </Grid.Column>

        <Grid.Column
          className='center'>

          <span className='taskListHeader'>
            <Icon name='bars'
                  size='big'
                  onClick={() => openLeftMenu(!leftMenuOpened)}
                  className='leftMenuButton'/>
            {selectedList.name}
          </span>

          <InputNewTask/>
          <TaskList/>
        </Grid.Column>

        <Grid.Column className='right'>
          <TaskDetails/>
        </Grid.Column>

      </Grid>
    </Wrapper>
  );
}

TickTick.propTypes = {
  selectedList: PropTypes.object
}

const mapStateToProps = state => ({
  selectedList: state.ticktick.lists.selectedList,
});

const mapDispatchToProps = dispatch => ({
  // setCounter: (value) => dispatch(setCounter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TickTick);
