import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const MicOffCircle = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Mic Off Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 80a48.14 48.14 0 0148 48v64a47.84 47.84 0 01-.63 7.71 2 2 0 01-3.46 1l-84.42-92.86a4 4 0 01-.47-4.77A48.08 48.08 0 01256 128zm32 256h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01224 352h16v-17.74a103.71 103.71 0 01-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224a15.91 15.91 0 0116.39-16A16.26 16.26 0 01192 224.4v23.82c0 25.66 28 55.48 64 55.48 1.67 0 3.37-.09 5.06-.24a3.94 3.94 0 013.29 1.29l21.07 23.19a2 2 0 01-.89 3.26 100.33 100.33 0 01-12.53 3.06V352h15.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01288 384zm-77.89-138.91l36.46 40.11a1 1 0 01-.95 1.66 48.26 48.26 0 01-37.25-41 1 1 0 011.74-.77zm152.65 119.75a16 16 0 01-22.6-1.08l-192-210a16 16 0 0123.68-21.52l192 210a16 16 0 01-1.08 22.6zM352 248.22a77.12 77.12 0 01-11.93 40.87 2 2 0 01-3.19.3l-19.19-21.1a4 4 0 01-.76-4.16 43.35 43.35 0 003.07-15.91v-23.8a16.3 16.3 0 0113.64-16.24c9.88-1.48 18.36 6.51 18.36 16.12z"/></svg>'}} />
    </SvgContainer>
  )
}


MicOffCircle.defaultProps = {
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


MicOffCircle.propTypes = {
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


export default MicOffCircle