import PropTypes from 'prop-types'

function Header({text, bgColor, txtColor }) {
  const headerStyle = {
      backgroundColor: bgColor,
      color: txtColor
  }

  return (
    <header style={headerStyle}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor : 'rgba(0,0,0,0,0.2)',
    txtColor : '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    txtColor: PropTypes.string
}

export default Header