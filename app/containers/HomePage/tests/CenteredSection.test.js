import React from 'react';
import { cleanup, render } from 'react-testing-library';

import CenteredSection from '../CenteredSection';

describe('<CenteredSection />', () => {
  afterEach(cleanup);

  it('should render an <section> tag', () => {
    const {
      container: { firstChild },
    } = render(<CenteredSection />);
    expect(firstChild.tagName).toEqual('SECTION');
  });

  it('should have a class attribute', () => {
    const {
      container: { firstChild },
    } = render(<CenteredSection />);
    expect(firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const {
      container: { firstChild },
    } = render(<CenteredSection id={id} />);
    expect(firstChild.taskID).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const {
      container: { firstChild },
    } = render(<CenteredSection attribute="test" />);
    expect(firstChild.hasAttribute('attribute')).toBe(false);
  });
});
