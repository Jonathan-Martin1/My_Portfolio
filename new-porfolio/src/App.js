import './App.scss';

import React from 'react';

import {
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';

function App() {
	return (
		<MDBContainer fluid>
			<div className='row'>
				<div className='col-md-8' style={{ width: '100%' }}>
					<header>
						<MDBNavbar expand='lg' light bgColor='white'>
							<MDBContainer fluid>
								<MDBNavbarToggler
									aria-controls='navbarExample01'
									aria-expanded='false'
									aria-label='Toggle navigation'>
									<MDBIcon fas icon='bars' />
								</MDBNavbarToggler>
								<div className='collapse navbar-collapse' id='navbarExample01'>
									<MDBNavbarNav right className='mb-2 mb-lg-0'>
										<MDBNavbarItem active>
											<MDBNavbarLink aria-current='page' href='#'>
												Home
											</MDBNavbarLink>
										</MDBNavbarItem>
										<MDBNavbarItem>
											<MDBNavbarLink href='#'>Projects</MDBNavbarLink>
										</MDBNavbarItem>
										<MDBNavbarItem>
											<MDBNavbarLink href='#'>About</MDBNavbarLink>
										</MDBNavbarItem>
										<MDBNavbarItem>
											<MDBNavbarLink href='#'>Contact</MDBNavbarLink>
										</MDBNavbarItem>
									</MDBNavbarNav>
								</div>
							</MDBContainer>
						</MDBNavbar>
						<div className='p-5 text-center bg-light'>
							<h1 className='mb-3'>Heading</h1>
							<h4 className='mb-3'>Subheading</h4>
							<a className='btn btn-primary' href='' role='button'>
								Call to action
							</a>
						</div>
					</header>
				</div>
			</div>
			<div className='row'>
				<div className='col-6'>.col-6</div>
				<div className='col-6'>.col-6</div>
			</div>
		</MDBContainer>
	);
}

export default App;
