import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../aws-exports.js';

(async () => {
  Amplify.configure(awsconfig);

  const userName = 'thiba.t208@gmail.com';
  const password = 'PASSWORD';

  await Auth.signIn(userName, password);

  const token = (await Auth.currentSession()).getIdToken().getJwtToken();

  console.log('token', token);

  const accessToken = (await Auth.currentSession()).getAccessToken().getJwtToken();
  
  console.log('accessToken', accessToken);
})()
