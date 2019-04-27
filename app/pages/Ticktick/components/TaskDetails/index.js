import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pickBy, map } from 'lodash';
import { Wrapper } from './styles';
import Checkbox from '../Checkbox';
import Tags from '../Tags';
import { selectList, selectTab } from '../Lists/actions';

function TaskDetails(props) {
  const { selectedTaskID, tasks } = props;


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
          <br/>

          <Tags taskID={selectedTaskID}/>
        </div>
        : 'Please, select a task from the list.'
      }
    </Wrapper>
  );
}

TaskDetails.propTypes = {
  selectedTaskID: PropTypes.string,
  tasks: PropTypes.object,
};

const mapStateToProps = state => ({
  tasks: state.ticktick.tasks,
  selectedTaskID: state.ticktick.tasksList.selectedTaskID
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
