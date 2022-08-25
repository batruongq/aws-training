import { Request, Response } from 'express';
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { PutObjectCommand } = require("@aws-sdk/client-s3");

import client from '../../common/db';
import app from '../../common/express';
import s3Client from '../../common/s3-client';
import { User } from '../../models/user';

const awsServerlessExpress = require('aws-serverless-express');

app.get('/users/presignedUrlUpload', async function(req: Request, res: Response) {
  const bucketParams = {
    Bucket: 'userapiv2',
    Key: 'avatar/',
  };

  const command = new PutObjectCommand(bucketParams);
  const presignedURL: string = await getSignedUrl(s3Client, command, {
    expiresIn: 3600,
  });

  res.json({
    url: presignedURL
  })
});

app.put('/users', async function(req: Request, res: Response) {
  const user: User = req.body;
  const id: string = req.params.id;

  const query: string = `UPDATE tblUsers SET avatar_url = '${user.avatarUrl}' WHERE id = ${id};`;

  try {
    await client.query(query)

    res.json({
      message: 'Update successfully'
    })
  } catch(err) {
    res.json(err)
  }

  client.end
});

app.listen(3000, function() {
    console.log("App started")
});


const server = awsServerlessExpress.createServer(app);

export const handler = (event: any, context: any) => {
   console.log(`EVENT: ${JSON.stringify(event)}`);
   return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
 };