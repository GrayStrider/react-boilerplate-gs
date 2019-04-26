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


  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      window.alert('enter press here! ')
    }
  }

  return (
    <Wrapper buttonBarActive={buttonBarActive}>
      <div role='presentation'
           onClick={() => toggleButtonBar(true)}>

        <Input placeholder={placeholder}
               onKeyPress={handleKeyPress}
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
