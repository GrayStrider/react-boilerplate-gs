import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Input } from 'semantic-ui-react';
import { Wrapper } from './styles';
//---

function InputNewTask(props) {
  const placeholder = `Add new task in ${props.categories[props.currentList].name}`;

  return (
    <Wrapper>
      {/*Current list header, SHOULD DISPLAY TAGS DIFFERENTLY*/}
      <Header>{props.categories[props.currentList].name}</Header>

      {/*sorting button*/}

      {/*{show completed button}*/}

      {/*FORM, input box*/}
      {/*TODO track cusror position and display ustom ui for tag selection*/}
      <Input
        inverted
        placeholder={placeholder}
        fluid/>
    </Wrapper>
  );
}

InputNewTask.propTypes = {
  defaultState: PropTypes.object,
};

const mapStateToProps = state => ({
  currentList: state.ticktick.lists.selectedList,
  categories: state.ticktick.data.spreadedCategories,
});

const mapDispatchToProps = dispatch => ({
  defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNewTask);
