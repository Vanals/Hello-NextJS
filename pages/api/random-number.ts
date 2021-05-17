import { NextApiRequest, NextApiResponse } from "next";

// This is a rest API function, which returns a JSON for example.
// It should NOT be a REACT component AND you must export a single function from a single file
export default function (req: NextApiRequest, res: NextApiResponse) {
  // You can do and call many things from the "res". Setting cookies for example, redirecting, etc.
  res.setHeader('Set-Cookie', 'areyouprogrammer=true')
  res.statusCode = 200

  // The request is what you whst you RECEIVE from a fetch post call for example
  console.log('REQUEST BODY', req.body)
  res.json({num: Math.floor(Math.random() * 10)})
}





// ** this this api endpoint with **
// http://localhost:3000/api/random-number

// fetch('http://localhost:3000/api/random-number', 
// { 
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({username: 'admin', password: 'admin'})  })