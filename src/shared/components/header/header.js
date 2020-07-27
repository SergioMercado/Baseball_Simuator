import logo from 'assets/img/logo.png'
import { useToggle } from 'hooks/'
import React from 'react'
import {
	Collapse,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
} from 'reactstrap'
import './header.css'
export default function Header() {
	const [toggle, setToggle] = useToggle()

	return (
		<Navbar className='menu' expand='md'>
			<NavbarBrand href='/'>
				<figure className='logo'>
					<img src={logo} alt='logotype' />
				</figure>
			</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={setToggle} navbar>
				<Nav className='ml-auto' navbar>
					<NavItem>
						<NavLink href='/components/'>Inicio</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/components/'>Resultados</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='/login/'>Login</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	)
}
