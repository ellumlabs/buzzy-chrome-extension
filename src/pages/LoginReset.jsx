import React, { useState } from 'react'

import { Box, Input, Button, Text, Image, Divider } from '@chakra-ui/react'

import { Link, useLocation } from 'wouter';

const LoginReset = () => {
  const [email, setEmail] = useState('')

  return (
    <Box display="flex" flexDirection="column" gap="4" m={8}>
      <Text fontSize='3xl' as='b'>Forgot your password?</Text>
      <p>
        To reset your password, please enter the email address of your Buzzy account.
      </p>
      <Input
        size='sm'
        value={email}
        placeholder='Enter your email...'
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      
      <Button bg="#ffe361" _hover={{ bg: '#ffe325' }}>Reset your password</Button>
      <Divider />
      <Text as='u'><Link href="/login">Go to login</Link></Text>
    </Box>
  )
}

export default LoginReset 

