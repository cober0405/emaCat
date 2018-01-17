require('./family.css');
import React from 'react';
import Header from './header';
import Shelve from './shelve';

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
		const title = '猫宅';
		return (
			<div id='family'>
				<Header title={title}/>
				<ul>
					{this.state.list.map(item => <Shelve item={item} from='family'/>)}
				</ul>
			</div>
		);
	}
});
