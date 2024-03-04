import React, { useState } from 'react'
import { TextInput, Button } from '@mantine/core'
import { Link } from 'wouter';

const SignUp = () => {
  const [value, setValue] = useState('') 

  return (
    <div>
      <h3>Sign up</h3>
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
      <Button fullWidth>Sign up</Button>
      <a href="#">Forgot your password?</a>
      <p>Already signed up?<Link ref="/login">Login</Link></p>
    </div>
  )
}

export default SignUp 
