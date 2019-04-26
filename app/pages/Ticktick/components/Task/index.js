import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { selectTask } from './actions';
import Checkbox from '../Checkbox';

function Task(props) {
  const {taskID, taskContent, selectTaskAction, taskIsSelected} = props
  return (
    <Wrapper onClick={() => selectTaskAction(taskID)}
             taskIsSelected={taskIsSelected}>

      <Checkbox taskID={taskID}/>
      <span>{taskContent}</span>
    </Wrapper>
  );
}

Task.propTypes = {
  taskID: PropTypes.string,
  taskContent: PropTypes.string,
  selectTaskAction: PropTypes.func,
  taskIsSelected: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => ({
  taskContent: state.ticktick.data.tasks[ownProps.taskID].taskContent,
  taskIsSelected: state.ticktick.tasksList.selectedTask === ownProps.taskID,
});

const mapDispatchToProps = dispatch => ({
  selectTaskAction: (index) => dispatch(selectTask(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
