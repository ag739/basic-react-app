import React, { Component } from 'react';

export class AppPage extends Component {
  render() {
    return (
      <div>
        <div style={{height: 100}}></div>
        <h1>This is a placeholder page, but normally you'd see the information for {this.props.name}.</h1>
      </div>
    );
  }
}
