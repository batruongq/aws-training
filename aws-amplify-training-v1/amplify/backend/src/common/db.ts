import { Client } from "pg"

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

try {
  client.connect()
} catch(err) {
  console.log('Database connect', err)
}

export default client;
