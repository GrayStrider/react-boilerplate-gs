import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Task from '../Task';

function TaskList(props) {
  return (
    <Wrapper>
      {
        props.tasksKeys
          .filter((key) => (props.tasksInSelectedList.includes(key)))
          .map((taskID) => (
              <Task id={taskID}/>
            ),
          )
      }
    </Wrapper>
  );
}

TaskList.propTypes = {
  tasksKeys: PropTypes.array,
  tasksInSelectedList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  tasksKeys: Object.keys(state.ticktick.data.tasks),
  tasksInSelectedList: state.ticktick.data.spreadedCategories[state.ticktick.lists.selectedList].tasks,
  selectedTask: state.ticktick.tasksList.selectedTask,
});

export default connect(mapStateToProps, null)(TaskList);
