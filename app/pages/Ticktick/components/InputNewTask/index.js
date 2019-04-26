import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Input, Popup } from 'semantic-ui-react';
import onClickOutside from 'react-onclickoutside';
import { Wrapper } from './styles';
import { InputButtonBar } from './inputButtonBar';


function InputNewTask(props) {
  const placeholder = `Add new task in ${props.categories[props.currentList].name}`;

  const [buttonBarActive, toggleButtonBar] = useState(false);
  const [inputValue, changeValue] = useState('');

  InputNewTask.handleClickOutside = () => toggleButtonBar(false);




  return (
    <Wrapper buttonBarActive={buttonBarActive}>
      <div dangerouslySetInnerHTML={{__html: inputValue}}/>

      <div role='presentation' onClick={() => toggleButtonBar(true)}>

        <Input placeholder={placeholder}
               value={inputValue}
               onChange={(e, {value}) => changeValue(value)}
               fluid/>

      </div>

      <InputButtonBar active={buttonBarActive} className='inputButtonBar'>

        <Popup trigger={<Icon name='calendar alternate outline'/>}
          content="popup content"
          on='click' horizontalOffset={12} verticalOffset={5}/>

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

const clickOutsideConfig = {
  handleClickOutside: () => InputNewTask.handleClickOutside
}

export default connect(mapStateToProps, mapDispatchToProps)
(
  onClickOutside(InputNewTask, clickOutsideConfig)
);
