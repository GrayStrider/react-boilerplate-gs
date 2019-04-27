import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import { defaultAction } from './actions';
import { Wrapper } from './styles';

function TaskListHeader(props) {
  const { selectedList } = props;
  return (
    <Wrapper>
      <Header inverted>{selectedList.name}</Header>
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
