import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'
import {appSelectors, testSelectors } from '../../redux/index'



export default class Hello extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className:''
  }

  render() {
    return (
    <div className={classNames('hello',this.props.className)}>
      This is the hello component
    </div>
    )
  }
}