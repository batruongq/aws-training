# OVERVIEW
This amplify app implement Backend for Revent App

## Tech stacks
- Amplify
- AppSync
- GraphQL
- Lambda
- IAM
  
## Development Guides
List out the notes, steps, issues in process building app

### Scripts
- Build the lambda functions: `npm run build`
- Push to aws server: `npm run deploy`
- Gen type for appsync lambda resolver: `npm run codegen`

### Naming convention
- [Best practice for naming convention in AWS](https://climbtheladder.com/10-aws-naming-convention-best-practices/)
- Resource name: Capitalize name

### Steps init app
Notes: The resource name could not be change, so be careful when init new one
- `amplify init`
  - App name: ReventApp
- `amplify add auth`
  - Resource name: ReventAppAuth
  - Identity pool name: ReventAppAuthIdentityPool
  - User pool name: ReventAppAuthUserPool
- `amplify add api`
  - Resource name: ReventAppApi
  - Authorization type for the API Amazon Cognito User Pool, IAM, Lambda

### Update API
- Open project backend/api/ReventAppApi/schema
- Run `amplify api gql-compile` to compile schema.graphql and view the compiled schema output in `backend/api/ReventAppApi/build/schema.graphql`
- `amplify push`

### Mock and run api locally
- Run `amplify mock api`
- Open Altair GraphQL Client Read setup [at](https://altairgraphql.dev/#download)

### Build and test lambda function locally
- Add new function: `amplify add function`
- Build the lambda functions: `npm run build`
- Run function for testing:
  - Define the event in `function/**/src/event.json`
  - `amplify mock function <function name>`

### Appsync code gen
Guide to use typescript with appsync lambda resolvers [Refer link](https://benoitboure.com/how-to-use-typescript-with-appsync-lambda-resolvers)
- To update types when schema change, run script:
  - `cd amplify/backend && npm run codegen`

### Using cli to sign up & sign in user for testing
- Sign up
`aws cognito-idp sign-up --client-id 2koahv5ifj8h2tna0alfqi932j --username thiba.t208@gmail.com --password PASSWORD --user-attributes Name="email",Value="thiba.t208@gmail.com" Name="name",Value="Ba Truong"`

- Confirm user: Get confirmation code from email confirm
`aws cognito-idp confirm-sign-up --client-id 2koahv5ifj8h2tna0alfqi932j --username=thiba.t208@gmail.com --confirmation-code CONF_CODE`

- Remove user
`aws cognito-idp admin-delete-user --user-pool-id us-east-1_bpWPl6CYo --username thiba.t208@gmail.com`
- Sign in to get token
`node amplify/frontend/src/sign-in.js`

