/*
 * @Author: Rainy [https://github.com/rain120]
 * @Date: 2020-11-21 16:49:12
 * @LastEditors: Rainy
 * @LastEditTime: 2020-12-07 20:08:41
 */

const { sortable } = require('../utils/navSidebar');

function getSidebar() {
	return sortable({
		nav: '',
		sortList: [
			{
				label: 'guide',
				priority: 0,
			}
		],
		noTitleList: [],
		collapsableList: []
	});
}

module.exports = getSidebar()
