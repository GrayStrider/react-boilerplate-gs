import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Input } from 'semantic-ui-react';
import { Wrapper } from './styles';
import { InputButtonBar } from './inputButtonBar';
//---

function InputNewTask(props) {
  const placeholder = `Add new task in ${props.categories[props.currentList].name}`;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.alert('click!');
    console.log('click');
  }

  return (
    <Wrapper>
      {/*Current list header, SHOULD DISPLAY TAGS DIFFERENTLY*/}

      {/*sorting button*/}

      {/*{show completed button}*/}

      {/*FORM, input box*/}
      {/*TODO track cusror position and display ustom ui for tag selection*/}
      <Input
        placeholder={placeholder}
        fluid/>
      <InputButtonBar
        onClick={handleClick}
        className='inputButtonBar'>
        <Icon
          onClick={handleClick}
          name='calendar alternate outline'/>
        <Icon name='exclamation circle'/>
        <Icon name='folder outline'/>
      </InputButtonBar>
    </Wrapper>
  );
}

InputNewTask.propTypes = {
  categories: PropTypes.object,
  currentList: PropTypes.string
};

const mapStateToProps = state => ({
  currentList: state.ticktick.lists.selectedList,
  categories: state.ticktick.data.spreadedCategories,
});

const mapDispatchToProps = dispatch => ({
  // defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputNewTask);
