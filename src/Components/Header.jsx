import React, { Component } from 'react';
const headerStyle = {
	display: 'flex',
	justifyContent: 'center',
}
class Header extends Component {
	render() {
		return (
			<div style={headerStyle}>
				<h1>TODO LIST</h1>
			</div>
		);
	}
}

export default Header
