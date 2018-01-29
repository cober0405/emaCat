require('./cattr.css');
import React from 'react';
import Info from './info';
import Gen from './gen';

module.exports = React.createClass({
	getInitialState() {
		return {}
	},
	close() {
		this.props.handleShow();
	},
	render() {
		return (
			<div id='cattr'>
				<div className='content'>
					<Info/>
					<Gen/>
				</div>
				<i className='close' onClick={this.close}/>
			</div>
		)
	}
});
