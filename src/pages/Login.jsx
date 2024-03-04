import React, { useState } from 'react'
import { TextInput, Button } from '@mantine/core'
import { Link, useLocation } from 'wouter';

const Login = () => {
  const [value, setValue] = useState('')
  const [, setLocation] = useLocation()

  const handleLogin = () => {
    localStorage.setItem('userToken', '12345')
    setLocation('/')
  }

  return (
    <div>
      <h3>Login in</h3>
      <TextInput
        label="Email"
        placeholder="Enter your email..."
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      /> 
      <TextInput
        label="Password"
        placeholder="Enter your password..."
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button fullWidth onClick={handleLogin}>Log in</Button>
      <a href="#">Forgot your password?</a>
      <p>Dont have an account? <Link href="/signup">Sign Up</Link></p>
    </div>
  )
}

export default Login
