import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Menu, Grid } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { menuItems } from './_mock';
import { selectTab } from './actions';

function Lists(props) {
  return (
    <Wrapper>
      <Menu
        pointing secondary inverted>

        {Object.keys(menuItems).map(
          (name, key) => (

            <Menu.Item
              key={menuItems[key].id}
              active={menuItems[key].id === props.selectedTab}
              onClick={() => props.selectTab(menuItems[key].id)}
            >
              {menuItems[key].name}
            </Menu.Item>
          ),
        )}
      </Menu>


      <Grid.Row
        className='lists_and_filters'>

        {[props.groups, props.tags, props.customLists][props.selectedTab - 1]
          .map((entry) => (

            <div className='list_entry' key={entry.id}>
              <Icon name='list'/>{entry.name}
            </div>
          ))}

      </Grid.Row>

    </Wrapper>
  );
}

Lists.propTypes = {
  selectedTab: PropTypes.number,
  selectTab: PropTypes.func,
  groups: PropTypes.array,
  tags: PropTypes.array,
  customLists: PropTypes.array
}

const mapStateToProps = state => ({
  selectedTab: state.ticktick.lists.selectedTab,
  groups: state.ticktick.data.groups,
  tags: state.ticktick.data.tags,
  customLists: state.ticktick.data.customLists,
});

const mapDispatchToProps = dispatch => ({
  selectTab: (index) => dispatch(selectTab(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
