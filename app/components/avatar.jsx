require('./avatar.css');
import React from 'react';

module.exports = React.createClass({
	render() {
		return (
			<div className='avatar'>
				<div className='head'>
					<img className='image' src={require('../images/cat.png')}/>
					<i className='sex'><img src={require('../images/sex1.png')}/></i>
				</div>
				<span className='num'>#0037458</span>
			</div>
		)
	}
});
