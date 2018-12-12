import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'
import Icon from '../Icon/Icon'

export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    enabled: PropTypes.bool,
    selected: PropTypes.bool
  }

  static defaultProps = {
    className:'',
    label: null,
    icon: null,
    enabled: true,
    selected: false
  }

  render() {
    return (
    <div className={classNames('button',this.props.className, {'enabled':this.props.enabled, 'disabled':!this.props.enabled, 'selected': this.props.selected})}>
      {this.props.icon && <Icon icon={this.props.icon} />}
      {this.props.label && <div>{this.props.label}</div>}
    </div>
    )
  }
}