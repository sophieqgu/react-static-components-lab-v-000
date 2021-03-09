import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        // eslint-disable-next-line
        <img src="/cat.gif" />
      </div>
    );
  }
}
