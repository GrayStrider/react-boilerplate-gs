import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { map, pickBy } from 'lodash';
import { Icon, Label } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { selectList, selectTab } from '../Lists/actions';
import { deleteTaskFromList } from '../actions';

function Tags(props) {
  const { taskTags, selectListAction, selectTabAction, deleteTaskFromListAction } = props;
  return (
    <Wrapper>
      {map(taskTags,
        (tag) => (<React.Fragment key={tag.listID}>
            <Label as='a'
                   onClick={() => {
                     selectListAction({
                       type: 'tags',
                       listID: tag.listID,
                       name: tag.name,
                     });
                     selectTabAction(tag.type);
                   }}
            >
              {tag.name}
            </Label>
            <Icon
              name='delete'
              link
              onClick={() => deleteTaskFromListAction(
                {
                  type: 'tags',
                  listID: tag.listID,
                  taskID: props.taskID
                }
              )}
              color='black'/>
          </React.Fragment>
        ))}
    </Wrapper>
  );
}

Tags.propTypes = {
  taskID: PropTypes.string,
  taskTags: PropTypes.object,
  selectListAction: PropTypes.func,
  selectTabAction: PropTypes.func,
  deleteTaskFromListAction: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  taskTags: pickBy(
    state.ticktick.insertableLists.tags,
    (tag) => tag.tasks.includes(
      ownProps.taskID,
    )),
});

const mapDispatchToProps = dispatch => ({
  selectListAction: (index) => dispatch(selectList(index)),
  selectTabAction: (index) => dispatch(selectTab(index)),
  deleteTaskFromListAction: (payload) => dispatch(deleteTaskFromList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
