import React, {useState, createRef} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { selectTask } from './actions';
import Checkbox from '../Checkbox';
import { modifyTask } from '../actions';

function Task(props) {
  const {
    taskID,
    taskContent,
    selectTaskAction,
    taskIsSelected,
    modifyTaskAction
  } = props;

  // can't use taskContent in span itself, won't let modify. This way works.
  const [spanContent] = useState(taskContent)
  const inputRef = createRef()

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      inputRef.current.blur();
    }
  }

  const handleInput = (e) => {
    modifyTaskAction({
      taskID: taskID,
      data: {taskContent: e.currentTarget.textContent}
    })
  }

  return (
    <Wrapper onClick={() => selectTaskAction(taskID)}
             taskIsSelected={taskIsSelected}>

      <Checkbox taskID={taskID}/>
      <span className='content'
            ref={inputRef}
            contentEditable
            spellCheck={false}
            suppressContentEditableWarning
            onKeyDown={handleKeyDown}
            onInput={handleInput}>{spanContent}</span>
    </Wrapper>
  );
}

Task.propTypes = {
  taskID: PropTypes.string,
  taskContent: PropTypes.string,
  taskIsSelected: PropTypes.bool,
  selectTaskAction: PropTypes.func,
  modifyTaskAction: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  taskContent: state.ticktick.tasks[ownProps.taskID].taskContent,
  taskIsSelected: state.ticktick.tasksList.selectedTaskID === ownProps.taskID,
});

const mapDispatchToProps = dispatch => ({
  selectTaskAction: (taskID) => dispatch(selectTask(taskID)),
  modifyTaskAction: ({taskID, data}) => dispatch(modifyTask({taskID, data}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
