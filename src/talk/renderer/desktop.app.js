/*
 * @copyright Copyright (c) 2022 Grigorii Shartsev <grigorii.shartsev@nextcloud.com>
 *
 * @author Grigorii Shartsev <grigorii.shartsev@nextcloud.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import Vue from 'vue'
import DesktopHeader from './DesktopHeader.vue'

/**
 * @param {import('VueRouter').Router} router - Vue Router instance
 * @return {import('vue').ComponentPublicInstance}
 */
export function createDesktopApp(router) {
	// eslint-disable-next-line vue/require-name-property
	return new Vue({
	  provide() {
			return {
				router,
			}
		},

		render: (h) => h(DesktopHeader),
	}).$mount('#desktop-header')
}
