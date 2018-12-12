import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'
import PanelContainer from '../PanelContainer/PanelContainer'
import ToolGroup from '../ToolGroup/ToolGroup'
import Icon from '../Icon/Icon'
import IconTypes from '../../Types/IconTypes'
import Button from '../Button/Button'

export default class DesignPanel extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className:''
  }

  render() {
    return (
    <PanelContainer direction="column" className={classNames('design-panel',this.props.className)}>
      <ToolGroup title="Tools">

        <Button icon={IconTypes.SCISSOR} />
        <Button icon={IconTypes.HAND} selected />
        </ToolGroup>
      <ToolGroup title="Properties">the properties group</ToolGroup>
      <ToolGroup title="Layers">
        <Button icon={IconTypes.PLUS} />
        <Button icon={IconTypes.TRASH} />     
      </ToolGroup>
    </PanelContainer>
    )
  }
}