import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { defaultAction } from './actions';
import { Wrapper } from './styles';

function TaskListHeader(props) {
  const { selectedList } = props;
  return (
    <Wrapper>
      <span>
        {selectedList.name}
      </span>
    </Wrapper>
  );
}

TaskListHeader.propTypes = {
  selectedList: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  selectedList: state.ticktick.lists.selectedList,
});

const mapDispatchToProps = dispatch => ({
  defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListHeader);
