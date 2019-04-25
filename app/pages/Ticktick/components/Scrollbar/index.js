import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Scrollbar extends Component {

  constructor(props, ...rest) {
    super(props, ...rest);
    Scrollbar.renderThumb = Scrollbar.renderThumb.bind(this);
  }


  static renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: `gray`,
      'border-radius': '3px'
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props}/>
    );
  }

  render() {
    return (
      <Scrollbars
        renderThumbHorizontal={Scrollbar.renderThumb}
        renderThumbVertical={Scrollbar.renderThumb}
        {...this.props}/>
    );
  }
}
