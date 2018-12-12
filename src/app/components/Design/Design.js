import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'
import * as Fabric from 'fabric'

const fabric = Fabric.default.fabric

export default class Design extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className:''
  }

  componentDidMount() {
    console.log(fabric)
    this.canvas = new fabric.Canvas('c')
   
    this.image = new fabric.Image.fromURL('http://www.citationbonheur.fr/wp-content/uploads/2018/09/L_influence_du_paysage_sur_le_bonheur.jpg',(img) => {
      this.canvas.add(img);
      img.set('selectable', false);
    })
    
    
  }

  render() {
    return (
    <div className={classNames('design',this.props.className)}>
      <canvas id="c" width="600" height="600"></canvas>
    </div>
    )
  }
}