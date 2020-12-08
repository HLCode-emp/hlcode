import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../public/lotties/title.json'

class titleAnimation extends Component {
  render(){

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={400}
        />
      </div>
    )
  }
}

export default titleAnimation