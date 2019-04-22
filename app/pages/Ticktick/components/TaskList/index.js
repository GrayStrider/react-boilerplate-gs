import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { defaultAction } from './actions';
import { Wrapper } from './styles';

function TaskList(props) {
  return (
    <Wrapper>
      {props.defaultState}
    </Wrapper>
  );
}

TaskList.propTypes = {
  defaultState: PropTypes.object,
}

const mapStateToProps = state => ({
  defaultState: state.ticktick.taskList.defaultStateEntry
});

const mapDispatchToProps = dispatch => ({
  defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
