import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'

export default class ToolGroup extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
  }

  static defaultProps = {
    className:'',
    title: ''
  }

  render() {
    return (
    <div className={classNames('tool-group',this.props.className)}>
      <div className="tool-title">{this.props.title}</div>
      <div className="tool-group-content">
        {this.props.children}
      </div>
    </div>
    )
  }
}