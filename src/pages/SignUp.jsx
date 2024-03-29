import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement, Button, Box, Text, Divider, Icon } from '@chakra-ui/react'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { Link } from 'wouter';

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box display="flex" flexDirection="column" gap="4" m={8}>
      <Text fontSize='3xl' as='b'>Sign up</Text>
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
            {show ? <Icon as={FaEye} /> : <Icon as={FaEyeSlash} />}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button bg="#ffe361" _hover={{ bg: '#ffe325' }}>Sign up</Button>
      <Text>Already have an account?&nbsp;
        <Link href="/login">
          <Text as='u'>
            Log in
          </Text>
        </Link>
      </Text>
    </Box>
  )
}

export default SignUp 

