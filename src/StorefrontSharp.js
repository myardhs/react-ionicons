import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const StorefrontSharp = props => {
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
      <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Storefront</title><path d="M464 448V267.85a104.76 104.76 0 01-33.56 6.58c-1.18 0-2.3.05-3.4.05a108 108 0 01-56.86-16 108 108 0 01-56.85 16 106.16 106.16 0 01-56.51-16.2 107.84 107.84 0 01-57.2 16.2 106.14 106.14 0 01-56.85-16.42 106.14 106.14 0 01-56.85 16.42c-1.09 0-2.19 0-3.37-.05h-.06A104.66 104.66 0 0148 267.49V448H16v32h480v-32zm-240-64h-96v-76a4 4 0 014-4h88a4 4 0 014 4zm160 64h-80V308a4 4 0 014-4h72a4 4 0 014 4zM492.57 170.28L445.89 64C432 32 432 32 400 32H112c-32 0-32 0-45.94 32L19.38 170.28c-9 19.41 2.89 39.34 2.9 39.35l.41.66c.42.66 1.13 1.75 1.62 2.37.1.13.19.27.28.4l5.24 6.39 5.31 5.14.42.36a69.65 69.65 0 009.44 6.78v.05a74 74 0 0036 10.67h2.47a76.08 76.08 0 0051.89-20.31 72.38 72.38 0 005.77-6 74.18 74.18 0 005.78 6 76.08 76.08 0 0051.89 20.31c23.28 0 44.07-10 57.63-25.56a.11.11 0 01.15 0l5.66 5.26a76.09 76.09 0 0051.9 20.31c23.29 0 44.11-10 57.66-25.61 13.56 15.61 34.37 25.61 57.67 25.61h2.49a71.35 71.35 0 0035-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 00488 212.17l2-3c.9-2.04 11.21-20.3 2.57-38.89z"/></svg>'}} />
    </SvgContainer>
  )
}


StorefrontSharp.defaultProps = {
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


StorefrontSharp.propTypes = {
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


export default StorefrontSharp