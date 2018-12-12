import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'

export default class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired
  }

  static defaultProps = {
    className:''
  }

  render() {
    return (
      <i class={classNames(this.props.icon, this.props.className)} />
    )
  }
}