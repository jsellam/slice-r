import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'
import Design from '../../components/Design/Design'
import DesignPanel from '../../components/DesignPanel/DesignPanel'

export default class DesignPage extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className:''
  }

  render() {
    return (
    <div className={classNames('design-page page',this.props.className)}>
      <Design />
      <DesignPanel />
    </div>
    )
  }
}