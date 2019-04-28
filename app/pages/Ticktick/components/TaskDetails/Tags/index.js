import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import faker from 'faker'
import {map} from 'lodash'
import { Dropdown } from 'semantic-ui-react'
import { Wrapper } from './styles';
import { defaultAction } from './actions';

function Tags(props) {
  const {defaultState} = props

  const addressDefinitions = faker.definitions.address

  const stateOptions = map(addressDefinitions.state, (state, index) => ({
    key: addressDefinitions.state_abbr[index],
    text: state,
    value: addressDefinitions.state_abbr[index],
  }))

  return (
    <Wrapper>

      <Dropdown
        fluid
        multiple
        onChange
        options={stateOptions}
        placeholder='Add tags'
        search
        selection
      />

    </Wrapper>
  );
}

Tags.propTypes = {
  defaultState: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => ({
  defaultState: state.default.defaultStateEntry
});

const mapDispatchToProps = dispatch => ({
  defaultAction: (index) => dispatch(defaultAction(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
