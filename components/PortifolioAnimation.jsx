import React, { Component } from 'react'
import Lottie from 'react-lottie'
import ReactDelayRender from 'react-delay-render';
import animationData from '../public/lotties/portifolio.json'

class portifolioAnimation extends Component {
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
              width={500}
              height={100}
        />
      </div>
    )
  }
}

export default ReactDelayRender({ delay: 2000 })(portifolioAnimation);