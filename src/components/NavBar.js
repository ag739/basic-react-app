import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import placeholder from '../img/placeholder.jpg';

const items = [
  {
    title:    placeholder,
    tag:      'img', 
    url:      '/',
    children: [],
    key:      1 
  },
  {
    title:    'Item 1',
    tag:      'text', 
    url:      '',
    children: [
      {
        title:    'subitem 1',
        tag:      'text', 
        url:      '/subitem1',
        children: [],
        key:      3 
      },
      {
        title:    'subitem 2',
        tag:      'text', 
        url:      '/subitem2',
        children: [],
        key:      4
      },
      {
        title:    'Plainview',
        tag:      'text', 
        url:      '/subitem3',
        children: [],
        key:      5
      }
    ],
    key:      2
  },
  {
    title:    'Item 2',
    tag:      'text', 
    url:      '/item2',
    children:  [],
    key:      6
  },
  {
    title:    'Item 3',
    tag:      'text', 
    url:      '/item3',
    children:  [],
    key:      7
  },
  {
    title:    'Item 4',
    tag:      'text', 
    url:      '/item4',
    children:  [],
    key:      8
  },
];

class ListItem extends Component {
  render() {
    let children = null;

    if (this.props.item.children.length !== 0) {
      children = this.props.item.children.map(function(child) {
        return (
          <ListItem item={child} />
        );
      });
    }

    const itemLink = this.props.item.tag === 'text' ? this.props.item.title : <img className="logo" src={this.props.item.title} alt="logo" />

    let li = null;
    if (children) {
      li = (
        <li key={this.props.item.key} className="hasSublist">
          <Link to="#">{itemLink}</Link>
          <ul className="sublist">{children}</ul>
        </li>
      );
    } else {
      li = (
        <li key={this.props.item.key}>
          <Link to={this.props.item.url}>
            {itemLink}
          </Link>
        </li>
      );
    }

    return li;
  }
}

export class NavBar extends Component {
  render() {
    let listItems = items.map(function(item) {
      return (
        <ListItem item={item} />
      );
    });

    return (
      <nav className="NavBar">
        <ul>{listItems}</ul>
      </nav>
    );
  }
}
