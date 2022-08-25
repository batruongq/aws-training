import client from '../../common/db';

export const handler = async (event: any, context: any) => {
  const userAttributes = event.request.userAttributes;

  if (userAttributes.sub) {
    const query = `INSERT INTO tblUsers(id, email, phone_number) values ('${userAttributes.sub}', '${userAttributes.email}', '${userAttributes.phone_number}')`;

    try {
      await client.query(query)
  
    } catch(err) {
      console.log('Error: Insert to database get error')
    }
  
    client.end
  } else {
    console.log('Error: Nothing insert to database', event);
  }

  return event
};