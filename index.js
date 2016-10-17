'use strict';

const awsCloudfrontInvalidate = require('./lib.js');

if (process.argv[2] === undefined) {
	throw Error('node aws-cloudfront-invalidate/index.js <distribution-id> [<invalidate-1> <invalidate-2> ...]');
}

const distribution = process.argv[2];

const invalidateList = process.argv.length > 3
	? process.argv.slice(3)
	: ['/*'] // default to invalidating everything
;

awsCloudfrontInvalidate(distribution, invalidateList)
	.then((data) => {
		console.log('invalidating created', data.Invalidation.Id); // eslint-disable-line no-console
	})
	.catch(console.error) // eslint-disable-line no-console
;
