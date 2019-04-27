import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown, Header, Icon } from 'semantic-ui-react';
import { defaultAction } from './actions';
import { Wrapper } from './styles';

function TaskListHeader(props) {
  const sortDropdownTrigger =
    <Icon name='sort amount up'/>

  const options = [
    { key: 'user', text: 'Account', icon: 'user' },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
  ]

  const { selectedList } = props;
  return (
    <Wrapper>
      <Header inverted>{selectedList.name}</Header>
      <Dropdown
        icon={null}
        options={options}
        pointing='top right'
        trigger={sortDropdownTrigger}/>
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
