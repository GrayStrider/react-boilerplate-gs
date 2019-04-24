import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { selectTask, toggleDone } from './actions';
import Checkbox from '../Checkbox';

function Task(props) {
  return (
    <Wrapper onClick={() => props.selectTask(props.id)}
             selected={props.selected}>
      <Checkbox id={props.id}/>
      <span>{props.content}</span>
      {/* Tags */}
      {/* List Name */}
      {/* Repeat Icon */}
      {/* Reminder Icon */}
      {/* Date */}
    </Wrapper>
  );
}

Task.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  selectTask: PropTypes.func,
  selected: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => ({
  content: state.ticktick.data.tasks[ownProps.id].content,
  selected: state.ticktick.tasksList.selectedTask === ownProps.id,
});

const mapDispatchToProps = dispatch => ({
  toggleDone: (index) => dispatch(toggleDone(index)),
  selectTask: (index) => dispatch(selectTask(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
