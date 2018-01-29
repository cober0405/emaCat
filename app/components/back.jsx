require('./back.css');
import React from 'react';
import {Link} from 'react-router';

module.exports = React.createClass({
	getInitialState: function () {
		return {
		}
	},
	contextTypes: {
		router: React.PropTypes.object
	},
	render: function () {
		return (
			<Link to='/home' id='back'>
				<img src={require('../images/back.png')}/>
			</Link>
		);
	}
});
