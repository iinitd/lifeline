import { NowRequest, NowResponse } from '@vercel/node'

const mysql = require('serverless-mysql')({
    config: {
      host     : process.env.DBHOST,
      port: process.env.DBPORT,
      database : process.env.DBDB,
      user     : process.env.DBUSER,
      password : process.env.DBPW
    }
  })
  

export default async (request: NowRequest, response: NowResponse) => {
    let results = await mysql.query('SELECT * FROM block')

    // Run clean up function
    await mysql.end()
  
    // Return the results
    console.log(results)
    const { name = 'World' } = request.query
  response.status(200).send(`Hello ${name}!`)
}