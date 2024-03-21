import React, { useState } from 'react'

import { Box, Input, InputGroup, InputRightElement, Button, Text, Divider, Image } from '@chakra-ui/react'


import { Link, useLocation } from 'wouter';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, setLocation] = useLocation()

  const handleLogin = () => {
    localStorage.setItem('userToken', '12345')
    setLocation('/')
  }

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box display="flex" flexDirection="column" gap="4" m={8}>
      <Text fontSize='3xl' as='b'>Log in</Text>
      <Button variant='outline'>Continue with Google</Button>
      <Divider />
      <Input
        size='sm'
        value={email}
        placeholder='Enter your email...'
        onChange={(event) => setEmail(event.currentTarget.value)}
      />

      <InputGroup size='sm'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password...'
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <InputRightElement width='1.75rem' mr={1}>
          <Button h='1.75rem' size='sm' variant='ghost' _hover={{ bg: '#ffffff' }} onClick={handleClick}>
            {show ? <p>view on icon</p>: <p>view off icon</p>}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button bg="#ffe361" _hover={{ bg: '#ffe325' }} onClick={handleLogin}>Log in</Button>
      <Text as='u'><Link href="/login-reset">Forgot your password?</Link></Text>
      <Text>Dont have an account?&nbsp; 
        <Text as='u'>
          <Link href="/signup">Sign Up</Link>
        </Text>
      </Text>
    </Box>
  )
}

export default Login

