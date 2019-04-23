import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import { flipCompleted } from './actions';
import { Wrapper } from './styles';

function Task(props) {
  return (
    <Wrapper priority={props.priority} completed={props.completed}>
      <Checkbox
        checked={props.completed}
        onClick={() => props.flipCompleted}
      />
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
  completed: PropTypes.object,
  flipCompleted: PropTypes.func,
  content: PropTypes.string,
  priority: PropTypes.number
}


export default connect(null, null)(Task);
