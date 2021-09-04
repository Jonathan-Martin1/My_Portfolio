import './App.scss';

import React, { useState } from 'react';

import {
  MDBContainer,
  MDBNavbar,
} from 'mdb-react-ui-kit';
import {
  Button,
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import HomeContent from './components/homeContent';

function App() {
	const [useToggle, setUseToggle] = useState(false);

	const toggleClick = (event) => {
		event.preventDefault();
		if (event) {
			setUseToggle(true);
		} else {
			setUseToggle(false);
		}
	};

	return (
		<Container>
			<MDBContainer fluid>
				<div className='row'>
					<div className='col-md-8' style={{ width: '100%' }}>
						<header>
							<MDBNavbar expand='lg' dark bgColor='grey'>
								<MDBContainer fluid>
									<Navbar.Toggle
										className='border-0'
										aria-controls='navbar-toggle'
									/>
									<NavbarCollapse
										id='navbar-toggle'
										style={{
											justifyContent: 'flex-end',
										}}>
										<Nav
											style={{
												margin: 'auto',
												color: 'black',
											}}>
											<Button
												className='mx-1'
												variant='outline-dark'
												style={{ boxShadow: '2px 2px grey' }}>
												<Link to='/'>Home</Link>
											</Button>
											<Button
												className='mx-1'
												variant='outline-dark'
												style={{ boxShadow: '2px 2px grey' }}>
												<Link to='/projects'>Projects</Link>
											</Button>
											<Button
												className='mx-1'
												variant='outline-dark'
												style={{ boxShadow: '2px 2px grey' }}>
												<Link to='/about'>About</Link>
											</Button>
											<Button
												className='mx-1'
												variant='outline-dark'
												style={{ boxShadow: '2px 2px grey' }}>
												<Link to='/contact'>Contact</Link>
											</Button>
										</Nav>
									</NavbarCollapse>
								</MDBContainer>
							</MDBNavbar>
						</header>
					</div>
				</div>
			</MDBContainer>
			<Switch>
				<Route exact={true} path='/'>
					<HomeContent />
				</Route>
				<Route path='/projects'></Route>
				<Route path='/about'></Route>
				<Route path='/contact'></Route>
				<Route>
					<h1>404 Not Found</h1>
				</Route>
			</Switch>
		</Container>
	);
}

export default App;
