import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Task from '../Task';
import Scrollbar from '../Scrollbar';

function TaskList(props) {
  const { activeTasksIDs } = props;
  const ListWrapper = <>{
    activeTasksIDs
      .map((taskID) => (
          <Task taskID={taskID} key={taskID}/>
        ),
      )
  }</>;
  return (
    <Wrapper>
      <Scrollbar style={{ height: '100%' }} autoHide>
        {ListWrapper}
      </Scrollbar>
    </Wrapper>
  );
}

TaskList.propTypes = {
  activeTasksIDs: PropTypes.array,
};

const mapStateToProps = (state) => ({
  activeTasksIDs: state.ticktick.lists.selectedList.tasks,
});

export default connect(mapStateToProps, null)(TaskList);
