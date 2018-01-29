require('./hospital.css');
import React from 'react';
import Back from './back';
import Res from './res';

module.exports = React.createClass({
	contextTypes: {
		router: React.PropTypes.object
	},
	show: function () {
		// event.preventDefault();
	},
	render: function () {
		return (
			<div id='hospital'>
				<Back/>
				<Res from={'1'}/>
				<div className='list-content'>
					<img className='f' src={require('../images/catty-m.png')}/>
					<img className='x' src={require('../images/xin.png')}/>
					<img className='m' src={require('../images/catty-f.png')}/>
					<div className='icon-d'>
						<img src={require('../images/icon-d.png')}/>
					</div>
					<div className='s'>
						<img src={require('../images/catty-s.png')}/>
					</div>
					<div className='start'>
						<img src={require('../images/start.png')}/>
					</div>
				</div>
			</div>
		);
	}
});
