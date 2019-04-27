import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pickBy, map } from 'lodash';
import { Wrapper } from './styles';
import Task from '../Task';
import Scrollbar from '../Scrollbar';

function TaskList(props) {
  const {filteredTasks} = props
  const ListWrapper = <>
    {
      map(filteredTasks,
        (task) => (
          <Task taskID={task.taskID} key={task.taskID}/>
          ))
    }
  </>;
  return (
    <Wrapper>
      <Scrollbar style={{ height: '100%' }} autoHide>
        {ListWrapper}
      </Scrollbar>
    </Wrapper>
  );
}

TaskList.propTypes = {
  filteredTasks: PropTypes.object,
};

const mapStateToProps = (state) => ({
  filteredTasks: pickBy(state.ticktick.tasks, (task) =>
    state.ticktick.insertableLists
      [state.ticktick.lists.selectedList.type]
      [state.ticktick.lists.selectedList.listID].tasks
      .includes(task.taskID)
  )
});

export default connect(mapStateToProps, null)(TaskList);
