require('./family.css');
import React from 'react';
import Back from './back';
import Show from './show';
import Res from './res';
import Interaction from './interaction';
import Status from './status';
import List from './list';
import Cattr from './cattr';

let util = require('../util/util');

module.exports = React.createClass({
	getInitialState: function () {
		return {
			showFlag: false
		}
	},
	contextTypes: {
		router: React.PropTypes.object
	},
	getList() {
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
	changeShowFlag() {
		this.setState({
			showFlag: !this.state.showFlag
		});
	},
	render() {
		const showFlag = this.state.showFlag;
		return (
			<div id='family'>
				<Back/>
				<Res from='1'/>
				<Interaction/>
				<div onClick={this.changeShowFlag}>
					<Show/>
				</div>
				<Status/>
				<List/>
				{showFlag && <Cattr handleShow={this.changeShowFlag.bind(this)}/>}
			</div>
		);
	}
});
