require("./footer.css");
import React from 'react';
import {Link} from 'react-router';

module.exports = React.createClass({
	getInitialState: function () {
		return {
			imgUrls: [],
		};
	},
	render: function () {
		return (
			<div id="footer">
				<Link to='/family' className='tab-bar'><i className='icon icon1'/><span className='text'>猫屋</span></Link>
				<Link to='/market' className='tab-bar'><i className='icon icon2'/><span className='text'>市场</span></Link>
				<Link to='/birth' className='tab-bar'><i className='icon icon3'/><span className='text'>医院</span></Link>
				<Link to='/brothel' className='tab-bar'><i className='icon icon4'/><span className='text'>社交</span></Link>
			</div>
		);
	}
});


