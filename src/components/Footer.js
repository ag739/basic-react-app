import React, { Component } from 'react';

const links = [
  {
    url:   '//facebook.com',
    src:   '#',
    title: 'like'
  },
  {
    url:   '//instagram.com',
    src:   '#',
    title: 'follow'
  }
];

export class Footer extends Component {
  render() {
    const footerLinks = links.map((item) => 
      (<a href={item.url}>
        <span>{item.src}</span>
        {item.title}
        <br />
      </a>)
    );

    return (
      <footer className="Footer">
        <p>-Insert Name of Organization-</p>

        <div>
          {footerLinks}
        </div>
      </footer>
    );
  }
}
