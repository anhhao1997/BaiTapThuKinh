import React, { Component } from 'react'

export default class KinhComponent extends Component {
  render() {

    let { glasses } = this.props

    return (
      <img onClick={() => { this.props.tryGlasses(glasses)}} className='m-3' src={glasses.url} width={150} alt="..." style={{ cursor: 'pointer' }} />
    )
  }
}
