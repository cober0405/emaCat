require('./brothel.css');
import React from 'react';
import Header from './header';
import Shelve from './shelve';
let util = require('../util/util')

module.exports = React.createClass({
	getInitialState: function () {
		return {
			list: []
		}
	},
	contextTypes: {
		router: React.PropTypes.object
	},
	show: function () {
		// event.preventDefault();
		const path = '/personal';
		this.context.router.push(path);
	},
	componentDidMount() {
		util.reqPost('/emaCat/commodity/getCatLeaseList', data => {
			this.setState({
				list: data.catList
			});
		});
	},
	render: function () {
		const title = '卖身所';
		return (
			<div id='brothel'>
				<Header title={title}/>
				<ul>
					{this.state.list.map(item => <Shelve item={item} from='brothel'/>)}
				</ul>
			</div>
		);
	}
});
