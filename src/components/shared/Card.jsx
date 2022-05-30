import PropTypes from 'prop-types'
export default function Card({children, reverse}) {
  
  //return (
  //  <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  //   )
  return (
    <div className="card" style={{
      backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : 'white',
      color: reverse ? 'white' : 'black'

    }}>{children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.prototype = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}