/*
 * Copyright (c) 2020. The Nextcloud Bookmarks contributors.
 *
 * This file is licensed under the Affero General Public License version 3 or later. See the COPYING file.
 */
import Vue from 'vue'
import Tooltip from '@nextcloud/vue/dist/Directives/Tooltip'
import App from './components/ViewAdmin'
import AppGlobal from './mixins/AppGlobal'

Vue.mixin(AppGlobal)
Vue.directive('tooltip', Tooltip)

global.Recognize = new Vue({
	el: '#recognize',
	render: h => h(App),
})
