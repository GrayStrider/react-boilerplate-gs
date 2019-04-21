import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Divider, Dropdown, Menu, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
const MenuStyled = styled(Menu)`
  margin-top: 0.6em !important;
  & .menu {
    margin-left: 0.6em !important;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <MenuStyled vertical>
        <Dropdown pointing='left' item text='Pages'>
          <Dropdown.Menu>
            <Dropdown.Item link as='a' href='https:\\google.com' target='_blank'>Google</Dropdown.Item>
            <Dropdown.Item as={Link} to='/features'>Features</Dropdown.Item>
            <Dropdown.Item as={Link} to='/playground'>Playground</Dropdown.Item>
            <Divider/>
            <Dropdown.Item as={Link} to='/'>Home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item link>
          About
        </Menu.Item>
      </MenuStyled>
    )
  }
}

export default Header;
