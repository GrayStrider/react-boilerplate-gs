import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Task from '../Task';

function TaskList(props) {
  return (
    <Wrapper>
       {Object.keys(props.tasks)
         .filter((key) => (
           props.data.spreadedCategories[props.selectedList].tasks.includes(key)))
         .map((taskID) => (
         <Task
           content={props.tasks[taskID].content}
           completed={props.tasks[taskID].completed}
           priority={props.tasks[taskID].priority}
           id={taskID}
           selected={props.selectedTask === taskID}
         />
       ))}
    </Wrapper>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  selectedList: PropTypes.number,
  data: PropTypes.object,
  selectedTask: PropTypes.string
};

const mapStateToProps = state => ({
  tasks: state.ticktick.data.tasks,
  selectedList: state.ticktick.lists.selectedList,
  data: state.ticktick.data,
  selectedTask: state.ticktick.tasksList.selectedTask
});

export default connect(mapStateToProps, null)(TaskList);
