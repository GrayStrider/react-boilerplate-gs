import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Menu, Grid } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { selectList, selectTab } from './actions';
import { menuCategories } from '../../mockDataReducer';

function Lists(props) {
  return (
    <Wrapper>
      <Menu
        pointing secondary inverted>

        {Object.keys(menuCategories).map(
          (key) => (

            <Menu.Item
              key={key}
              active={key === props.selectedTab}
              onClick={() => props.selectTab(key)}
            >
              {key}
            </Menu.Item>
          ),
        )}
      </Menu>

      <Grid.Row
        className='lists_and_filters'>
        <Menu vertical inverted fluid>
          {Object.keys(props.data[props.selectedTab]).map((key) => (

              <Menu.Item
                key={key}
                onClick={() => props.selectList(key)}
                active={key === props.selectedList}>
                <span><Icon name='list'/>{props.data[props.selectedTab][key].name}</span>
              </Menu.Item>
            ))}
        </Menu>
      </Grid.Row>

    </Wrapper>
  );
}

Lists.propTypes = {
  selectedTab: PropTypes.string,
  selectedList: PropTypes.number,

  selectTab: PropTypes.func,
  selectList: PropTypes.func,

  groups: PropTypes.array,
  tags: PropTypes.array,
  customLists: PropTypes.array,
  data: PropTypes.object
}

const mapStateToProps = state => ({
  selectedTab: state.ticktick.lists.selectedTab,
  selectedList: state.ticktick.lists.selectedList,

  data: state.ticktick.data,
  groups: state.ticktick.data.groups,
  tags: state.ticktick.data.tags,
  customLists: state.ticktick.data.customLists,
});

const mapDispatchToProps = dispatch => ({
  selectTab: (index) => dispatch(selectTab(index)),
  selectList: (index) => dispatch(selectList(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
