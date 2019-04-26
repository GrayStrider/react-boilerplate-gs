import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Task from '../Task';
import Scrollbar from '../Scrollbar';

function TaskList(props) {
  return (
    <Wrapper>
      <Scrollbar style={{height: '100%' }} autoHide>
        {
          props.tasksKeys
            .filter((key) => (props.categories.includes(key)))
            .map((taskID) => (
                <Task taskID={taskID} key={taskID}/>
              ),
            )
        }
      </Scrollbar>
    </Wrapper>
  );
}

TaskList.propTypes = {
  tasksKeys: PropTypes.array,
  categories: PropTypes.array,
};

const mapStateToProps = (state) => ({
  tasksKeys: Object.keys(state.ticktick.data.tasks),
  insertableLists: {
    ...state.ticktick.data.groups,
    ...state.ticktick.data.tags,
    ...state.ticktick.data.custom
  }[state.ticktick.lists.selectedList.taskID].tasks,
  selectedTask: state.ticktick.tasksList.selectedTask,
});

export default connect(mapStateToProps, null)(TaskList);
