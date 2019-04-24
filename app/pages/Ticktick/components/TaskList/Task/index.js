import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { selectTask, toggleDone } from './actions';

function Task(props) {
  return (
    <Wrapper priority={props.priority}
             onClick={() => props.selectTask(props.id)}
             completed={props.completed}>
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
  priority: PropTypes.number,
  selectTask: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
  toggleDone: (index) => dispatch(toggleDone(index)),
  selectTask: (index) => dispatch(selectTask(index)),
});

export default connect(null, mapDispatchToProps)(Task);
