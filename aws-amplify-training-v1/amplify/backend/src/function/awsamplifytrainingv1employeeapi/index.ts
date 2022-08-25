import { Request, Response } from 'express';

import client from '../../common/db';
import app from '../../common/express';

const awsServerlessExpress = require('aws-serverless-express');

app.get('/employees', async function(req: Request, res: Response) {
  const queryParams = req.query

  let query = `SELECT * from tblEmployees`

  if (queryParams && queryParams.cancelDate) {
    query = `SELECT t1.* 
      FROM tblEmployees t1
      LEFT JOIN tblLunchRegisterStatus t2 on t2.employee_id = t1.id
      LEFT JOIN tblLunchCancelRegister t3 on t3.employee_id = t1.id AND t3.cancelDate = '${queryParams.cancelDate}'
      WHERE t2.status = 'off' OR t3.id IS NOT NULL`;
  }

  try {
    const result = await client.query(query);
    
    res.json({
      rows: result.rows
    })
  } catch(err) {
    res.json(err)
  }

  client.end
});

app.post('/employees', async function(req: Request, res: Response) {
  const user = req.body;
  const query = `INSERT INTO tblEmployees(name) values ('${user.name}')`;

  try {
    await client.query(query)

    res.json({
      message: 'Add employee successfully'
    })
  } catch(err) {
    res.json(err)
  }

  client.end
});

/****************************
* Set cancel lunch for employee *
****************************/
app.post('/employees/:id/cancelLunch', async function(req: Request, res: Response) {
  const {status, cancelDates} = req.body;
  const employeeId = req.params.id;

  const cancelStatus = status === 'off' ? 'off' : 'on';

  const registerStatusQuery = `INSERT INTO tblLunchRegisterStatus(employee_id, status) VALUES
    (${employeeId}, '${cancelStatus}')
    ON CONFLICT (employee_id)
    DO UPDATE SET
      status = EXCLUDED.status`

  try {
    await client.query(registerStatusQuery)
  } catch(err) {
    client.end

    return res.json(err)
  }

  // If employees just cancel some dates, update the cancel dates 
  if (cancelStatus === 'on') {
    
    const valueInsert = cancelDates.map((value: string) =>
      `(${employeeId}, '${value}')`
    )
    const query = `INSERT INTO tblLunchCancelRegister(employee_id, cancelDate) VALUES
      ${valueInsert.join(', ')}`

    try {
      await client.query(query)
    } catch(err) {
      client.end

      return res.json(err)
    }
  }

  res.json({
    message: 'Set cancel lunch successfully'
  })
  
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