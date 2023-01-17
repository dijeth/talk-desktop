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

import { getCredentials } from '../accounts/credentials.service.js'
import { getUserMetadata } from '../shared/globalsStore.service.js'

export {
	getRequestToken,
	onRequestTokenUpdate,
} from 'talk/node_modules/@nextcloud/auth/dist/index.esm.js'

/**
 *
 */
export function getCurrentUser() {
	return {
		uid: getCredentials().user,
		displayName: getUserMetadata().displayname,
		isAdmin: getUserMetadata().groups.includes('admin'), // TODO: Is it true way to detect admin?
	}
}
