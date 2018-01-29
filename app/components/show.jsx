require('./show.css');
import React from 'react';

module.exports = React.createClass({
	render: function () {
		return (
			<div className='show'>
				<div className='cat'><img src={require('../images/cat.png')}/><div className='shadow'><img src={require('../images/shadow.png')}/></div></div>
			</div>
		);
	}
});
