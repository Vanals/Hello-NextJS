import { useState } from 'react'
import jwt from 'jsonwebtoken'

export default function Home() {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('You are not logged in')
  const [secretMessage, setSecretMessage] = useState<string>()

  async function submitForm() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password})
    }).then((token) => token.json())
    
    const token = res.token
    
    if (token) { 
      const json =  jwt.decode(token) as { [key: string]: string}
      console.log(json)
      setMessage(`Welcome ${json.username}, and you are ${json.admin ? 'an admin' : 'not an admin'}`)
      
      const res = await fetch('/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      }).then((token) => token.json())

      if(res.secretAdminCode) {
        setSecretMessage('secretMessage')
      }

    } else {
      setMessage('Something went wrong')
    }
  }

  return (
    <div>
      <h1>{message}</h1>
      <h1>Secret: {secretMessage}</h1>
      <form>
        <input type="text" name='username' onChange={(e) => {setUsername(e.target.value)}}/>
        <br/>
        <input type="password" name='password' onChange={(e) => {setPassword(e.target.value)}}/>
        <input type="button" value="Login" onClick={submitForm}/>
      </form>
    </div>
  )
}