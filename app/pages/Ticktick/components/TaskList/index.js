import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { defaultAction } from './actions';
import { Wrapper } from './styles';
import Task from './Task';

function TaskList(props) {
  return (
    <Wrapper>
      {props.tasks.map((value, index) => (
        <Task
          content={value.content}
          completed={value.completed}
          priority={value.priority}
        />
      ))}
    </Wrapper>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
};

const mapStateToProps = state => ({
  tasks: state.ticktick.data.tasks,
});

const mapDispatchToProps = dispatch => ({
  defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
