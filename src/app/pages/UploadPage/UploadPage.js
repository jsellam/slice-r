import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'
import { screenActions } from '../../redux'
import {connect} from 'react-redux'
import { withRouter } from "react-router";
import fabric from 'fabric'

const mapSelector = state => ({

})

const mapActions = (dispatch) => ({
  addScreen:(url) => dispatch(screenActions.addScreen(url))
})


class UploadPage extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className:''
  }

  constructor(props) {
    super(props)
    console.log(fabric)
    this.state = {
      dragOver:false,
      img:''
    }
  }

  handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({dragOver:true})
  }

  handleDrop = (e) => {
    
    e.preventDefault()
    const file = e.dataTransfer.files;
    const reader  = new FileReader();
    console.log("props",this.props)
    reader.addEventListener("load", () => {
      console.log("props2",this.props)
      //this.setState({img:reader.result})
      this.props.addScreen(reader.result)
      this.props.history.push('/design')
    });
    reader.readAsDataURL(file[0]);
  }

  handleDragLeave = () => {
    this.setState({dragOver:false})
  }

  render() {
    return (
    <div className={classNames('upload-page page',this.props.className)}>
    <img src={this.state.img} />
      <div className={classNames('drop-zone', {'drag-over':this.state.dragOver})} 
        onDragEnter={this.handleDragEnter} 
        onDragOver={this.handleDragEnter}
        onDrop={this.handleDrop}
        onDragLeave={this.handleDragLeave}
        >
          Upload file
      </div>
    </div>
    )
  }
}

export default withRouter(connect(mapSelector,mapActions)(UploadPage))