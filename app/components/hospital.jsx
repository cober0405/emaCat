require('./hospital.css');
import React from 'react';
import Header from './header';
import { Link } from 'react-router';

module.exports = React.createClass({
	contextTypes: {
		router: React.PropTypes.object
	},
	show: function () {
		// event.preventDefault();
	},
	render: function () {
		const title = '医院';
		return (
			<div id='hospital'>
				<Header title={title}/>
				<div className='cats'>
					<img src={require('../images/cat.png')}/>
					<img className='xin' src={require('../images/xin.jpg')}/>
					<img src={require('../images/cat1.png')}/>
				</div>
				<div className='btn'><button>来吧</button></div>
			</div>
		);
	}
});
