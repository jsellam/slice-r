import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'

export default class PreviewPage extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className:''
  }

  render() {
    return (
    <div className={classNames('preview-page page',this.props.className)}>
      preview page
    </div>
    )
  }
}