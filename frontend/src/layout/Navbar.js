import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand mx-5" href="#">My Crud App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link to={'/adduser'} className='btn btn-outline-light'>Add User</Link>
  </div>
</nav>
    </>
  )
}

export default NavBar