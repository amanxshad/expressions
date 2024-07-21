import { CognitoUserPool } from "amazon-cognito-identity-js";


const userpool = process.env.REACT_APP_USER_POOL;
const clientid = process.env.REACT_APP_CLIENT_ID

const poolData = {
    UserPoolId: userpool,
    ClientId: clientid,

    
    // To use AWS Cognito for user authentication, follow these steps:
    // 1. Create an AWS account if you don't already have one.
    // 2. Navigate to the AWS Cognito service in the AWS Management Console.
    // 3. Create a new user pool according to your specific requirements.
    // 4. After the user pool is created, note down the generated `userPoolId` and `clientId`.
    // 5. Use the `userPoolId` and `clientId` in the configuration below for integration.

}
export default new CognitoUserPool(poolData);