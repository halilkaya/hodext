import React from 'react'
import { getViewController } from './viewcontroller'

let Controller = getViewController()

export class HodextItem extends React.Component {

  render() {

    let data = this.props.data
    let style = 'hodext-item'
    let boundClick = this.handleClick.bind(this)
    let boundDoubleClick = this.handleDoubleClick.bind(this)

    if (this.props.active) style += ' active'

    return (
      <div
        className={style}
        onClick={boundClick}
        onDoubleClick={boundDoubleClick}
      >{data.content}</div>
    )

  }

  handleClick () {
    Controller.activateByKey(this.props.data.key)
  }

  handleDoubleClick () {
    Controller.useByKey(this.props.data.key)
  }

}