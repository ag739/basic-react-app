import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Control extends Component {
  handleClick = () => this.props.updateSlider(this.props.ind);

  render() {
    return (
      <button onClick={this.handleClick} className={this.props.active === this.props.ind ? 'slide-control active' : 'slide-control'} />
    );
  }
}

export class Carousel extends Component { 
  constructor(props) {
    super(props);
    this.state = {active: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({active: this.state.active === this.props.slides.length - 1 ? 0 : this.state.active + 1}), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick(ind) {
    this.setState({
      active: ind
    });
  }

  render() {
    const txt = this.props.text.map((t) =>
      t.elem === 'button' ? <Link to='/item2'><button>{t.text}</button></Link> : <p>{t.text}</p>
    );

    const style = { backgroundImage: 'url(' + this.props.slides[this.state.active] + ')' }

    const controller = this.props.slides.map((slide, ind) => <Control updateSlider={this.handleClick} ind={ind} active={this.state.active} />);

    return (
      <div className="Carousel">
        <div className="slide" style={style}>
          {txt}
        </div>
        <div className="controller">{controller}</div>
      </div>
    );
  }
}
