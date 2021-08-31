import React from 'react';

import { MDBContainer } from 'mdb-react-ui-kit';

function App() {
	return (
		<MDBContainer fluid>
			<div class='row'>
				<div class='col-md-8'>.col-md-8</div>
				<div class='col-6 col-md-4'>.col-6 .col-md-4</div>
			</div>
			<div class='row'>
				<div class='col-6 col-md-4'>.col-6 .col-md-4</div>
				<div class='col-6 col-md-4'>.col-6 .col-md-4</div>
				<div class='col-6 col-md-4'>.col-6 .col-md-4</div>
			</div>
			<div class='row'>
				<div class='col-6'>.col-6</div>
				<div class='col-6'>.col-6</div>
			</div>
		</MDBContainer>
	);
}

export default App;
