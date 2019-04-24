import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { selectTask, toggleDone } from './actions';
import Checkbox from '../Checkbox';

function Task(props) {
  return (
    <Wrapper priority={props.priority}
             onClick={() => props.selectTask(props.id)}
             selected={props.selected}
             completed={props.completed}>
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
  completed: PropTypes.object,
  content: PropTypes.string,
  priority: PropTypes.number,
  selectTask: PropTypes.func,
  selected: PropTypes.bool
}

const mapDispatchToProps = dispatch => ({
  toggleDone: (index) => dispatch(toggleDone(index)),
  selectTask: (index) => dispatch(selectTask(index)),
});

export default connect(null, mapDispatchToProps)(Task);
