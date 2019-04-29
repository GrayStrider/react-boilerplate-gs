import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { map, pickBy, keys, difference } from 'lodash';
import { Dropdown } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { addTaskToList, deleteTaskFromList } from '../../actions';

function Tags(props) {
  const { tags, taskID, deleteTaskFromListAction, addTaskToListAction } = props;

  const allTags = map(
    tags, (tag) => (
      {
        key: tag.listID,
        text: tag.name,
        value: tag.listID,
      }
    ));

  const taskTags = keys(
    pickBy(
      tags, (tag) =>
        tag.tasks.includes(
          taskID,
        )));

  const handleChange = (e, { value }) =>
    value.length > taskTags.length

      ? addTaskToListAction(
      {
        taskID: taskID,
        type: 'tags',
        listID: difference(taskTags, value),
      },
      )

      : deleteTaskFromListAction(
      {
        taskID: taskID,
        type: 'tags',
        listID: value,
      },
      );

  return (
    <Wrapper>

      <Dropdown
        fluid
        multiple
        options={allTags}
        placeholder='Add tags..'
        search
        selection
        value={taskTags}
        onChange={handleChange}
      />
      {taskTags}
    </Wrapper>
  );
}

Tags.propTypes = {
  tags: PropTypes.object,
  deleteTaskFromListAction: PropTypes.func,
  addTaskToListAction: PropTypes.func,
  taskID: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  taskTags: pickBy(
    state.ticktick.insertableLists.tags,
    (tag) => tag.tasks.includes(
      ownProps.taskID,
    )),
  tags: state.ticktick.insertableLists.tags,
});

const mapDispatchToProps = dispatch => ({
  deleteTaskFromListAction: (payload) => dispatch(deleteTaskFromList(payload)),
  addTaskToListAction: (payload) => dispatch(addTaskToList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
