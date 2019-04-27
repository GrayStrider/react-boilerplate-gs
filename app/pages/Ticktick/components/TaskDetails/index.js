import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Checkbox from '../Checkbox';

function TaskDetails(props) {
  const { selectedTaskID, tasks, tags } = props;

  return (
    <Wrapper>
      {selectedTaskID ?
        <div>
          <span>
            <Checkbox taskID= {selectedTaskID}/>
            {tasks[selectedTaskID].taskContent}
          </span>
          <hr/>
          Description: {tasks[selectedTaskID].description}
          Tags: {tags}
        </div>
        : 'Please, select a task from the list.'
      }
    </Wrapper>
  );
}

TaskDetails.propTypes = {
  selectedTaskID: PropTypes.string,
  tasks: PropTypes.object,
  tags: PropTypes.array
};

const mapStateToProps = state => ({
  tasks: state.ticktick.tasks,
  selectedTaskID: state.ticktick.tasksList.selectedTaskID,
  tags: Object.keys(state.ticktick.insertableLists.tags)
    .filter(
      (tagKey) => (
        state.ticktick.insertableLists.tags[tagKey].tasks
        .includes(state.ticktick.tasksList.selectedTaskID)
      )
    ),
  tagsByIdProp: {}
});

const mapDispatchToProps = dispatch => ({
  // defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
