import React from 'react';
import { cleanup, render } from 'react-testing-library';

import Input from '../Input';

describe('<Input />', () => {
  afterEach(cleanup);

  it('should render an <input> tag', () => {
    const { container } = render(<Input />);
    expect(container.firstChild.tagName).toEqual('INPUT');
  });

  it('should have a class attribute', () => {
    const { container } = render(<Input />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<Input id={id} />);
    expect(container.firstChild.taskID).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<Input attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
