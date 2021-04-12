## Setup local
1. Run `npm init`
2. Run `npm start`

## Test ApiGateway in local
Run `npm run local` to simulate API Gateway and Lambda with Node

Update `events/api-gateway-event.json` with some values that are valid for your server (httpMethod, path, body etc.)

## Migration Database
Reference https://sequelize.org/v5/manual/migrations.html#the--code--sequelizerc--code--file

Run `cp .env.example .env` and config

Run `NODE_ENV=dev npx sequelize-cli db:migrate`

## Deploy
1. Run `npm run config -- --account-id="<accountId>" --bucket-name="<bucketName>" [--region="<region>" --function-name="<functionName>" --stage-name="<stageName>"]` to configure the example, eg. `npm run config -- --account-id="091184759410" --bucket-name="test-carabao-lambda-express" --region="ap-southeast-1" --function-name="carabao-serverless-express"`.
2. Run `npm run setup` (Windows users: `npm run win-setup`) - this installs the node dependencies, creates an S3 bucket (if it does not already exist), packages and deploys your serverless Express application to AWS Lambda, and creates an API Gateway proxy API.
3. After the setup command completes, open the AWS CloudFormation console https://console.aws.amazon.com/cloudformation/home and switch to the region you specified.

If you would prefer to delete AWS assets that were just created, simply run `npm run delete-stack` to delete the CloudFormation Stack, including the API and Lambda Function. If you specified a new bucket in the `config` command for step 1 and want to delete that bucket, run `npm run delete-bucket`.

## Commit
Before commit Run `npm run deconfig` for clear setting.
