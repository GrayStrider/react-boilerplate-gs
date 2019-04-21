import React from 'react';
import styled from 'styled-components';
import { Grid, Segment } from 'semantic-ui-react';

const Wrapper = styled.div`
  background-color: cadetblue;
  height: 100%;
  padding: 1em;
`;

function Playground(props) {
  return (
    <Wrapper>
      <Grid columns='equal' celled>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>1</Segment>
            <Segment>2</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>1</Segment>
            <Segment>2</Segment>
            <Segment>3</Segment>
            <Segment>4</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column floated='right' width={15}>
            <Segment>2</Segment>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </Wrapper>
  );
}

export default Playground;
