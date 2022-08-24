import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app: Express = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req: Request, res: Response, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

export default app;
