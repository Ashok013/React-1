import React, { Component } from 'react'
import Photo from './Photo';
import Text from './Text';
export default class Card extends Component {
  render() {
    return (
      <div>
        <Photo/>
        <Text/>
      </div>
    )
  }
}
