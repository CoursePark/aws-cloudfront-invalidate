# aws-cloudfront-invalidate

## Module Usage

_**NOTE**_ This module uses the `aws-sdk` module which will need AWS credentials set, this is usually handled with either a `~/.aws/credentials` file or by setting the `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY` environment variables.

### Invalidate Everything

```javascript
const awsCloudfrontInvalidate = require('aws-cloudfront-invalidate');

const distributionId = 'F2V1Y58HE6DIEA'; // something like this

awsCloudfrontInvalidate(distributionId).then((data) => {
	console.log('invalidating created', data.Invalidation.Id);
});
```

### General Usage

```javascript
const awsCloudfrontInvalidate = require('aws-cloudfront-invalidate');

const distributionId = 'F2V1Y58HE6DIEA'; // something like this
const invalidateList = ['/app.js', '/styles.css'];

awsCloudfrontInvalidate(distributionId, invalidateList).then((data) => {
	console.log('invalidating created', data.Invalidation.Id);
});
```

## Command Line Usage

### Invalidate Everything

```
npm install aws-cloudfront-invalidate
aws-cloudfront-invalidate F2V1Y58HE6DIEA
```

### General Usage

```
npm install aws-cloudfront-invalidate
aws-cloudfront-invalidate F2V1Y58HE6DIEA /app.js /style.css
```