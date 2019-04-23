import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { defaultAction } from './actions';
import { Wrapper } from './styles';
import Task from './Task';

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
         />
       ))}
    </Wrapper>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  selectedList: PropTypes.number,
  data: PropTypes.object
};

const mapStateToProps = state => ({
  tasks: state.ticktick.data.tasks,
  selectedList: state.ticktick.lists.selectedList,
  data: state.ticktick.data
});

const mapDispatchToProps = dispatch => ({
  defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
