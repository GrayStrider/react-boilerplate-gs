import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { map, pickBy } from 'lodash';
import { Label } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { selectList, selectTab } from '../Lists/actions';

function Tags(props) {
  const {taskTags, selectListAction, selectTabAction} = props
  return (
    <Wrapper>
      {map(taskTags,
        (tag) => (
          <Label as='a'
                 key={tag.listID}
                 onClick ={() => {
                   selectListAction({
                     type: 'tags',
                     listID: tag.listID,
                     name: tag.name
                   })
                   selectTabAction(tag.type)
                 }}
                 content={tag.name} />
        ))}
    </Wrapper>
  );
}

Tags.propTypes = {
  taskTags: PropTypes.object,
  selectListAction: PropTypes.func,
  selectTabAction: PropTypes.func
}

const mapStateToProps = (state, ownProps) => ({
  taskTags: pickBy(
    state.ticktick.insertableLists.tags,
    (tag) => tag.tasks.includes(
      ownProps.taskID
    ))
});

const mapDispatchToProps = dispatch => ({
  selectListAction: (index) => dispatch(selectList(index)),
  selectTabAction: (index) => dispatch(selectTab(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
