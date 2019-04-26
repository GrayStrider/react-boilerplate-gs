import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Checkbox from '../Checkbox';

function TaskDetails(props) {
  return (
    <Wrapper>
      {props.details ?

      <div>
        <span><Checkbox id={props.id}/> {props.details.taskContent}</span>
      <hr/>
           Description: {props.details.description}
      </div> : 'Please, select a task from the list.'
      }
    </Wrapper>
  );
}

TaskDetails.propTypes = {
  details: PropTypes.object,
  id: PropTypes.string
}

const mapStateToProps = state => ({
  details: state.ticktick.tasksList.selectedTask ?
  state.ticktick.data.tasks[state.ticktick.tasksList.selectedTask] : null,
  taskID: state.ticktick.tasksList.selectedTask
});

const mapDispatchToProps = dispatch => ({
  // defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
