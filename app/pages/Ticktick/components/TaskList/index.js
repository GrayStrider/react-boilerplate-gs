import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { defaultAction } from './actions';
import { Wrapper } from './styles';

function TaskList(props) {
  return (
    <Wrapper>
      {props.defaultState}
      {props.tasks.map((value, index) => (
        <div>[{index}]: {value.content}</div>
      ))}
    </Wrapper>
  );
}

TaskList.propTypes = {
  defaultState: PropTypes.object,
  tasks: PropTypes.array,
};

const mapStateToProps = state => ({
  defaultState: state.ticktick.taskList.defaultStateEntry,
  tasks: state.ticktick.data.tasks,
});

const mapDispatchToProps = dispatch => ({
  defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
