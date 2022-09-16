import React from 'react'

const headerStyle = {
  textAlign: 'text-center',
  fontWeight: 'bold',
  fontSize: 18,
  marginTop: 0,
  width: 200,
};

function Header(props) {
  return (
    <nav className="navbar navbar-dark bg-secondary">
      <headerStyle className="navbar-brand text-center" >{props.title}</headerStyle>
    </nav>
  )
}

export default Header