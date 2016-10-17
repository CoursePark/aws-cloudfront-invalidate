#! /usr/bin/env node
'use strict';

const awsCloudfrontInvalidate = require('./index.js');

if (process.argv[2] === undefined) {
	console.error('node aws-cloudfront-invalidate/index.js <distribution-id> [<invalidate-1> <invalidate-2> ...]'); // eslint-disable-line no-console
	process.exit(); // eslint-disable-line no-process-exit
}

const distribution = process.argv[2];

const invalidateList = process.argv.length > 3
	? process.argv.slice(3)
	: undefined
;

awsCloudfrontInvalidate(distribution, invalidateList)
	.then((data) => {
		console.log('invalidating created', data.Invalidation.Id); // eslint-disable-line no-console
	})
	.catch(console.error) // eslint-disable-line no-console
;
