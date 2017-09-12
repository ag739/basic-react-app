import React, { Component } from 'react';
import { Carousel } from './Carousel';
import { LearnMore } from './LearnMore';

// images
import placeholder from '../img/placeholder.jpg';

import tree from '../img/tree.jpg';
import pink from '../img/pink.jpg';
import fall from '../img/fall.jpg';
import city from '../img/city.jpg';
import calm from '../img/calm.jpg';
import blue from '../img/blue.jpg';
import arid from '../img/arid.jpg';

export class AppHome extends Component {
  render() {
    return (
      <div>
        <Carousel slides={[tree, pink, fall, city, calm, blue, arid]} text={[
            {
              text: "Here's some cool fun placeholder text",
              elem: "p"
            },
            {
              text: "Click this button to see Item 2",
              elem: "button"
            },
          ]} />

        <div className="flex">
          <LearnMore title="Subitem 1" link="/subitem1" src={placeholder} />
          <LearnMore title="Subitem 2" link="/subitem2" src={placeholder} />
          <LearnMore title="Subitem 3" link="/subitem3" src={placeholder} />
        </div>
      </div>
    );
  }
}
