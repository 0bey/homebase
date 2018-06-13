import React, { PureComponent } from 'react'

export default class Hover extends PureComponent {
  state = {
    isHovered: false
  }

  _toggle = isHovered => this.setState({ isHovered })

  componentDidMount() {
    this._element.addEventListener("mouseenter", _ => this._toggle(true));
    this._element.addEventListener("mouseleave", _ => this._toggle(false));
  }

  componentWillUnmount() {
    this._element.removeEventListener("mouseenter", this._toggle);
    this._element.removeEventListener("mouseleave", this._toggle);
  }

  render() {
    return (
      <div ref={element => this._element = element} style={{height: '100%'}}>
        { this.props.children(this.state.isHovered) }
      </div>
    )
  }
}