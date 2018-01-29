require('./home.css');
import React from 'react';
import Res from './res';
import Footer from './footer';
import Show from './show';

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
	getList(){
		let uid = util.getCookie('uid');
		const postData = {
			uid: uid
		};
		util.reqPost('/emaCat/currency/getUserCatList', postData, data => {
			console.log(data);
			this.setState({
				list: data.catList
			});
		});
	},
	componentDidMount() {
		this.getList();
	},
	render() {
		return (
			<div id='home' className='full'>
				<Res from='1'/>
				<Show/>
				<Footer/>
			</div>
		);
	}
});
