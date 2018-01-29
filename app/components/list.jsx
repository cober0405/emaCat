require('./list.css');
import React from 'react';
let util = require('../util/util');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			list: []
		}
	},
	contextTypes: {
		router: React.PropTypes.object
	},
	getList() {
		let uid = util.getCookie('uid');
		// const postData = {
		// 	uid: uid
		// };
		// util.reqPost('/emaCat/currency/getUserCatList', postData, data => {
		// 	console.log(data);
		// 	this.setState({
		// 		list: data.catList
		// 	});
		// });
		console.log(uid);
	},
	componentDidMount() {
		this.getList();
	},
	render() {
		return (
			<div id='list'>
				<ul>
					<li><img src={require('../images/catty2.png')}/></li>
					<li><img src={require('../images/catty2.png')}/></li>
					<li><img src={require('../images/catty2.png')}/></li>
					<li><img src={require('../images/catty2.png')}/></li>
					<li><img src={require('../images/catty2.png')}/></li>
					<li><img src={require('../images/catty2.png')}/></li>
					<li><img src={require('../images/catty2.png')}/></li>
					<li><img src={require('../images/catty2.png')}/></li>
					<li><img src={require('../images/catty2.png')}/></li>
				</ul>
			</div>
		);
	}
});
