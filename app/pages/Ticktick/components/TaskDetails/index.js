import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Checkbox from '../Checkbox';

function TaskDetails(props) {
  const { selectedTaskID, tasks } = props;

  return (
    <Wrapper>
      {props.selectedTaskID ?
        <div>
          <span><Checkbox id={selectedTaskID}/> {tasks[selectedTaskID].taskContent}</span>
          <hr/>
          Description: {tasks[selectedTaskID].description}
        </div>
        : 'Please, select a task from the list.'
      }
    </Wrapper>
  );
}

TaskDetails.propTypes = {
  selectedTaskID: PropTypes.object,
  tasks: PropTypes.object
};

const mapStateToProps = state => ({
  tasks: state.ticktick.tasks,
  selectedTaskID: state.ticktick.tasksList.selectedTaskID ?
    state.ticktick.tasks[state.ticktick.tasksList.selectedTaskID] : null,
});

const mapDispatchToProps = dispatch => ({
  // defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
