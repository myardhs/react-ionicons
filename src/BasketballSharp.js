import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const BasketballSharp = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Basketball</title><path d="M256 233.37l34.45-34.45a207.08 207.08 0 01-50.12-135.25c0-5 .19-10.05.54-15A207.09 207.09 0 00120.67 98zM313.14 176.23L391.33 98A207.07 207.07 0 00273 48.8c-.41 4.9-.64 9.86-.64 14.87a175.25 175.25 0 0040.78 112.56zM335.77 198.86a175.25 175.25 0 00112.56 40.81c5 0 10-.23 14.87-.64A207.07 207.07 0 00414 120.67zM176.23 313.14a175.23 175.23 0 00-112.56-40.81q-7.52 0-14.87.64A207.07 207.07 0 0098 391.33zM256 278.63l-34.45 34.45a207.08 207.08 0 0150.12 135.25c0 5-.19 10.05-.54 15A207.06 207.06 0 00391.33 414zM448.33 271.67a207.08 207.08 0 01-135.25-50.12L278.63 256 414 391.33a207.09 207.09 0 0049.39-120.2c-5.01.35-10.02.54-15.06.54zM233.37 256L98 120.67a207.06 207.06 0 00-49.39 120.2c5-.35 10-.54 15-.54a207.08 207.08 0 01135.25 50.12zM120.67 414A207.07 207.07 0 00239 463.2q.63-7.35.64-14.87a175.23 175.23 0 00-40.81-112.56z"/></svg>'}} />
    </SvgContainer>
  )
}


BasketballSharp.defaultProps = {
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


BasketballSharp.propTypes = {
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


export default BasketballSharp