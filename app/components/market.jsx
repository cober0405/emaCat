require('./market.css');
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
	componentDidMount() {
		util.reqPost('/emaCat/commodity/getCatDealList', data => {
			this.setState({
				list: data.catList
			});
		});
	},
	render: function () {
		const title = '猫市';
		return (
			<div id='market'>
				<Header title={title}/>
				<ul>
					{this.state.list.map(item => <Shelve item={item} from='market'/>)}
				</ul>
			</div>
		);
	}
});
