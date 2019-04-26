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
  InputNewTask.handleClickOutside = () => toggleButtonBar(false);

  const [inputValue, changeInputValue] = useState('')
  const handleKeyPress = (event) => {
    if(event.key === 'Enter' || event.key === 'Backspace') {return}
    changeInputValue(inputValue + event.key)
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      window.alert(`Submitted: ${inputValue}`)
      changeInputValue('')
    }

    if(event.key === "Backspace"){
      changeInputValue(inputValue.slice(0, -1))
    }

  }

  return (
    <Wrapper buttonBarActive={buttonBarActive}>
      <div role='presentation'
           onClick={() => toggleButtonBar(true)}>

        <Input placeholder={placeholder}
               value={inputValue}
               onKeyPress={handleKeyPress}
               onKeyDown={handleKeyDown}
               fluid/>

      </div>



      <InputButtonBar active={buttonBarActive}
                      className='inputButtonBar'>

        <Popup trigger={

            <Icon name='calendar alternate outline'/>
          }
          content="popup content"
          on='click'
          horizontalOffset={12}
          verticalOffset={5}

        />


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
