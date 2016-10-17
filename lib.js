'use strict';

const AWS = require('aws-sdk');

module.exports = function (distribution, invalidateList, callerReference = Date.now().toString()) {
	return new Promise((resolve, reject) => {
		const cloudfront = new AWS.CloudFront();
		cloudfront.createInvalidation({
			DistributionId: distribution,
			InvalidationBatch: {
				CallerReference: callerReference,
				Paths: {
					Quantity: invalidateList.length,
					Items: invalidateList
				}
			}
		}, (err, data) => err && reject(err) || resolve(data));
	});
};
