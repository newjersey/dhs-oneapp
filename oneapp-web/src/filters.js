'use strict';

import Vue from 'vue';
import moment from 'moment';

Vue.filter('humanDate', function(str) {
	return str ? moment(str).calendar() : '';
});

Vue.filter('date', function(str, format) {
	if (!format) {
		format = 'MMMM Do, YYYY';
	}
	return str ? moment(str).format(format) : '';
});

Vue.filter('datetime', function(str, format) {
	if (!format) {
		format = 'MMM Do YYYY, h:mm a';
	}
	return str ? moment(str).format(format) : '';
});
