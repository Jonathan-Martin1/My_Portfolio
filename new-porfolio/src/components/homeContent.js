import React from 'react';

import { Container } from 'react-bootstrap';

const HomeContent = () => {
	return (
		<Container>
			<div className='p-5 text-center bg-light'>
				<h1 className='mb-3'>Keep Pushing Forward</h1>
				<h4 className='mb-3'>No matter what lies ahead, I will keep going.</h4>
				<a className='btn btn-primary' href='/contact' role='button'>
					Contact Me
				</a>
			</div>
			<div className='row'>
				<div
					className='col-12'
					style={{
						textAlign: 'center',
					}}>
					<h2>Skills</h2>
					<ol>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
							deleniti aliquam autem necessitatibus et ducimus dolorum quaerat
							doloremque quam quo.
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
							nostrum quisquam maxime ducimus. Sequi nobis reiciendis enim
							praesentium sunt quidem, placeat architecto harum tenetur dolore
							voluptatibus fuga, sed iure provident. Dicta minus, adipisci
							porro, itaque qui reprehenderit, aliquid consectetur quidem
							ducimus totam dolore placeat sit deserunt quos libero
							exercitationem soluta?
						</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Excepturi, unde!
						</li>
					</ol>
				</div>
				<div
					className='col-12'
					style={{
						textAlign: 'center',
					}}>
					<h2>Tools</h2>
					<ol>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
							vel.
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
							accusamus, temporibus corporis impedit nesciunt omnis deserunt
							architecto doloremque soluta velit sequi dolorum unde quidem.
							Aperiam, incidunt iusto numquam libero similique, distinctio
							corporis vitae a dolor, explicabo harum eligendi excepturi
							laboriosam?
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
							quibusdam ad nobis assumenda eligendi quam cupiditate laboriosam
							quia est aspernatur.
						</li>
					</ol>
				</div>
				<div className='col-12' style={{ textAlign: 'center' }}>
					<h2>Certifications</h2>
				</div>
			</div>
		</Container>
	);
};

export default HomeContent;
