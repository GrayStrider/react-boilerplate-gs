import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import { flipCompleted } from './actions';
import { Wrapper } from './styles';

function Task(props) {
  return (
    <Wrapper>
      <Checkbox
        checked={props.completed}
        onClick={() => props.flipCompleted}
      />
      <div>{props.content}</div>
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
  content: PropTypes.string
}

const mapStateToProps = state => ({
  defaultState: state.default.defaultStateEntry
});

const mapDispatchToProps = dispatch => ({
  flipCompleted: (index) => dispatch(flipCompleted(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
