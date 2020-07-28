import logo from 'assets/img/logo.png'
import { useToggle } from 'hooks/'
import React from 'react'
import { Link } from 'react-router-dom'
import {
	Collapse,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
} from 'reactstrap'
import './header.css'
export default function Header() {
	const [toggle, setToggle] = useToggle()

	return (
		<Navbar id='menu' className='menu' light expand='md'>
			<NavbarBrand href='/'>
				<figure className='logo'>
					<img src={logo} alt='logotype' />
				</figure>
			</NavbarBrand>
			<NavbarToggler className='bg-white' onClick={setToggle} />
			<Collapse isOpen={toggle} navbar>
				<Nav className='ml-auto' navbar>
					<NavItem>
						<Link className='nav-link text-white' to='/'>
							Inicio
						</Link>
					</NavItem>
					<NavItem>
						<Link className='nav-link text-white' to='/resultados/'>
							Resultados
						</Link>
					</NavItem>
					<NavItem>
						<Link className='nav-link text-white' to='/posiciones/'>
							Posiciones
						</Link>
					</NavItem>
					<NavItem>
						<Link className='nav-link text-white' to='/login/'>
							Login
						</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	)
}
