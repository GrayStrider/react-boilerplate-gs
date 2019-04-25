import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Task from '../Task';
import Scrollbar from '../Scrollbar';

function TaskList(props) {
  return (
    <Wrapper>
      <Scrollbar style={{height: '100%' }} autoHide>
        {
          props.tasksKeys
            .filter((key) => (props.tasksInSelectedList.includes(key)))
            .map((taskID) => (
                <Task id={taskID}/>
              ),
            )
        }
      </Scrollbar>
    </Wrapper>
  );
}

TaskList.propTypes = {
  tasksKeys: PropTypes.array,
  tasksInSelectedList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  tasksKeys: Object.keys(state.ticktick.data.tasks),
  tasksInSelectedList: state.ticktick.data.spreadedCategories[state.ticktick.lists.selectedList].tasks,
  selectedTask: state.ticktick.tasksList.selectedTask,
});

export default connect(mapStateToProps, null)(TaskList);
