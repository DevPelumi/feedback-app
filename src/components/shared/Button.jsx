import React from 'react'
import PropType from 'prop-types'


function Button({children, version, type, isDisabled}) {
  return (
      <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
          {children}
      </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropType.node.isRequired,
    version: PropType.string,
    isDisabled: PropType.bool,
    type: PropType.string,
}


export default Button