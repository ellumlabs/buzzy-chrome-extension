import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'

import { Search2Icon } from '@chakra-ui/icons'

import MenuDrawer from '../components/MenuDrawer'

const Home = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start'>
      <MenuDrawer />
      <Box display='flex' flexDirection='column' w="100%" pl='10' pr='10'>
        <Text fontSize='lg'>My Sites</Text> 
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Search2Icon />
          </InputLeftElement>
          <Input placeholder='Search sites' />
        </InputGroup>
        <Text fontSize='sm'>2 Sites</Text>
      </Box>
    </Box>
  )
}

export default Home 
