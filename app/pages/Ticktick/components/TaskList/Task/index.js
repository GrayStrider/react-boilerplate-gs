import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { toggleDone } from './actions';

function Task(props) {
  return (
    <Wrapper priority={props.priority} completed={props.completed}>
      <Checkbox
        checked={props.completed}
        onClick={() => props.toggleDone(props.id)}
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
  id: PropTypes.string,
  completed: PropTypes.object,
  toggleDone: PropTypes.func,
  content: PropTypes.string,
  priority: PropTypes.number
}

const mapDispatchToProps = dispatch => ({
  toggleDone: (index) => dispatch(toggleDone(index)),
});

export default connect(null, mapDispatchToProps)(Task);
