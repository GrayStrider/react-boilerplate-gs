import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { selectTask } from './actions';
import Checkbox from '../Checkbox';

function Task(props) {
  const {
    taskID,
    taskContent,
    selectTaskAction,
    taskIsSelected,
  } = props;

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
  taskIsSelected: PropTypes.bool,
  selectTaskAction: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  taskContent: state.ticktick.tasks[ownProps.taskID].taskContent,
  taskIsSelected: state.ticktick.tasksList.selectedTaskID === ownProps.taskID,
});

const mapDispatchToProps = dispatch => ({
  selectTaskAction: (taskID) => dispatch(selectTask(taskID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
