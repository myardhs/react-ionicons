import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const PartlySunnySharp = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Partly Sunny</title><path d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91 15.24-13.68 36.17-23.21 59-26.84.06 0 .08 0 .09-.05 6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 01232 160c30.23 0 58.48 9.39 81.71 27.17a142.69 142.69 0 0145.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zm19-232.18zM381.5 219.89a169.23 169.23 0 0145.44 19A96 96 0 00281 129.33q-2.85 2-5.54 4.2a162.47 162.47 0 0157.73 28.23 174.53 174.53 0 0148.31 58.13zM448 192h64v32h-64zM320 32h32v64h-32zM255.35 129.63l12.45-12.45-44.62-44.63-22.63 22.63 33.17 33.17h.6a172 172 0 0121.03 1.28zM404.203 117.17l44.626-44.625 22.627 22.628-44.625 44.625z"/></svg>
    </SvgContainer>
  )
}


PartlySunnySharp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


PartlySunnySharp.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default PartlySunnySharp