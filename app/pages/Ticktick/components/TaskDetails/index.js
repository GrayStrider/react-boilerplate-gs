import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { defaultAction } from './actions';
import { Wrapper } from './styles';

function TaskDetails(props) {
  return (
    <Wrapper>
      {props.details ?
      <div>Content: {props.details.content}
      <hr/>
           Details: {props.details.description}
      </div> : 'Please, select a task from the list.'
      }
    </Wrapper>
  );
}

TaskDetails.propTypes = {
  details: PropTypes.string,
}

const mapStateToProps = state => ({
  details: state.ticktick.tasksList.selectedTask ?
  state.ticktick.data.tasks[state.ticktick.tasksList.selectedTask] : null
});

const mapDispatchToProps = dispatch => ({
  defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
