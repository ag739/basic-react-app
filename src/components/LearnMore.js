import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class LearnMore extends Component {
  render() {
    return (
      <div className="LearnMore">
        <img src={this.props.src} alt={this.props.title} />
        <p className="title">{this.props.title}</p>
        <Link to={this.props.link}><button>Learn More</button></Link>
      </div>
    );
  }
}
