/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Playground from '../../pages/Playground';
import TickTick from '../../pages/Ticktick/App';

const AppWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate='%s - React.js Boilerplate'
        defaultTitle='React.js Boilerplate'
      >
        <meta name='description' content='A React.js Boilerplate application'/>
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/features' component={FeaturePage}/>
        <Route path='/playground' component={Playground}/>
        <Route path='/ticktick' component={TickTick}/>
        <Route path='' component={NotFoundPage}/>
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
