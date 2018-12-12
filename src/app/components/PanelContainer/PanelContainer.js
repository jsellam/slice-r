import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'

export default class PanelContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    layout: PropTypes.oneOf(['vertical','horizontal'])
  }

  static defaultProps = {
    className:'',
    title: '',
    layout:'vertical'
  }

  render() {
    return (
    <div className={classNames('panel-container',this.props.className, this.props.layout+'-panel')}>
      {this.props.children}
    </div>
    )
  }
}