import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown, Input } from 'semantic-ui-react';
import { Wrapper } from './styles';


function InputNewTaskDropdownTags(props) {
  const placeholder = `Add new task in ${props.categories[props.currentList].name}`;

  const options = [
    { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
    { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
    { key: 'Danish', text: 'Danish', value: 'Danish' },
    { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
    { key: 'English', text: 'English', value: 'English' },
    { key: 'French', text: 'French', value: 'French' },
    { key: 'German', text: 'German', value: 'German' },
    { key: 'Greek', text: 'Greek', value: 'Greek' },
    { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' }
  ]

  const [currentValues, changeValues] = useState({})
  const handleChange = (e, { value }) => changeValues({ currentValues: value })

  return (
    <Wrapper>
      {JSON.stringify(currentValues)}
      <Dropdown
        inverted
        fluid
        placeholder={placeholder}
        selection
        multiple
        value={currentValues}
        onChange={handleChange}
        search
        options={options}/>

    </Wrapper>
  );
}

InputNewTaskDropdownTags.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(InputNewTaskDropdownTags)
