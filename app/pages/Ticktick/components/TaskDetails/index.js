import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pickBy, map } from 'lodash';
import { Label } from 'semantic-ui-react';
import { Wrapper } from './styles';
import Checkbox from '../Checkbox';
import { selectList, selectTab } from '../Lists/actions';

function TaskDetails(props) {
  const { selectedTaskID, tasks, taskTags, selectListAction, selectTabAction } = props;


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
          {map(taskTags,
            (tag) => (
              <Label as='a'
                     key={tag.listID}
                     onClick ={() => {
                       selectListAction(tag.listID)
                       selectTabAction(tag.type)
                     }}
                     content={tag.name} />
              ))}
        </div>
        : 'Please, select a task from the list.'
      }
    </Wrapper>
  );
}

TaskDetails.propTypes = {
  selectedTaskID: PropTypes.string,
  tasks: PropTypes.object,
  taskTags: PropTypes.object,

  selectTabAction: PropTypes.func,
  selectListAction: PropTypes.func
};

const mapStateToProps = state => ({
  tasks: state.ticktick.tasks,
  selectedTaskID: state.ticktick.tasksList.selectedTaskID,
  taskTags: pickBy(
    state.ticktick.insertableLists.tags,
    (tag) => tag.tasks.includes(
      state.ticktick.tasksList.selectedTaskID
  ))
});

const mapDispatchToProps = dispatch => ({
  selectTabAction: (index) => dispatch(selectTab(index)),
  selectListAction: (index) => dispatch(selectList(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);
