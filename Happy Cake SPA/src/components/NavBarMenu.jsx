import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const NavBarMenu = () => {
  return (
    <Navbar
      bg='danger'
      variant='dark'
      className='mb-3'
    >
      <Container className='justify-content-start'>
        <Link
          to='/'
          className='text-white pe-2 text-decoration-none'
        >
          🏠 Inicio
        </Link>
        <Link
          to='/Contact'
          className='text-white text-decoration-none'
        >
          📒 Contacto
        </Link>
      </Container>
      <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
    </Navbar>
  )
}

export default NavBarMenu
