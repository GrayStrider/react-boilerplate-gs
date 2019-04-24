import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollArea from 'react-scrollbar';
import { Wrapper } from './styles';
import Task from '../Task';

function TaskList(props) {
  return (
    <Wrapper>
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      >
        {
          props.tasksKeys
            .filter((key) => (props.tasksInSelectedList.includes(key)))
            .map((taskID) => (
                <Task id={taskID}/>
              ),
            )
        }
      </ScrollArea>
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
