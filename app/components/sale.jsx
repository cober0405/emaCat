require('./sale.css');
import React from 'react';
import Back from './back';
import Res from './res';
import Shelve from './shelve';
let util = require('../util/util')

module.exports = React.createClass({
	getInitialState: function () {
		return {
		}
	},
	contextTypes: {
		router: React.PropTypes.object
	},
	show: function (event) {
		const price = event.target.elements[0].value;
		let postData = {
			uid: util.getCookie('uid'),
			upDays: 1,
			catId: util.getCookie('catId'),
			price: price
		};
		util.reqPost('/emaCat/transcation/createCatOrder', postData, data => {
			console.log(data);
			const path = '/market';
			this.context.router.push(path);
		});
	},
	render: function () {
		return (
			<div id='sale'>
				<Back/>
				<Res/>
				<div className='list-content'>
					<ul>
						<Shelve from='sale'/>
						<li className='price'>
							<div>
								<span>初始价格</span>
								<input id='s_price' type='number' defaultValue='0'/>
							</div>
							<div>
								<span>流拍价格</span>
								<input type='number' defaultValue='0'/>
							</div>
							<div>
								<span>拍卖时间</span>
								<input type='number' defaultValue='0'/>
							</div>
						</li>
					</ul>
					<div className='btn'>
						<img src={require('../images/sale1.png')}/>
					</div>
				</div>
			</div>
		);
	}
});
