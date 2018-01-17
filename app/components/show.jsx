require('./show.css');
import React from 'react';

module.exports = React.createClass({
	render: function () {
		return (
			<div className='show'>
				<img src={require('../images/cat.png')}/>
			</div>
		);
	}
});
