import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  List,
  ListItem,
  Button,
  IconButton
} from '@chakra-ui/react'

import { Search2Icon, ArrowRightIcon, PlusSquareIcon } from '@chakra-ui/icons'

import MenuDrawer from '../components/MenuDrawer'

import useFetch from '../hooks/useFetch'

const Home = () => {
  const { data: sites, isPending, error } = useFetch('http://localhost:3000/sites')

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start'>
      <MenuDrawer />
      <Box display='flex' flexDirection='column' gap='4' w='100%' pl='10' pr='10'>
        <Text fontSize='lg'>Sites</Text>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Search2Icon />
          </InputLeftElement>
          <Input placeholder='Search sites' />
        </InputGroup>
        <Box display='flex'>
          <IconButton
            colorScheme='blue'
            size='sm'
            icon={<PlusSquareIcon />}
          />
        </Box>
        <Box>
          <Text fontSize='sm'>2 Sites</Text>
          <Divider />
          <List>
            {sites && (
              sites.map((site) => (
                <ListItem>
                  <Button leftIcon={<ArrowRightIcon />} variant="ghost" w="100%" justifyContent='flex-start'>
                    {site.url}
                  </Button>
                </ListItem>
              ))
            )}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Home 
