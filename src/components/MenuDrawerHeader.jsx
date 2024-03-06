import {
  Box,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const MenuDrawerHeader = () => {
  return (
    <Box display='flex' alignItems='center'>
      <Menu>
        <MenuButton
          as={Button} 
          rightIcon={<ChevronDownIcon />}
          variant='ghost'
        >
          <Box display='flex' alignItems='center' gap='2'>
            <Image borderRadius='full' boxSize='30px' src='https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?resize=1536,1536' alt='Dan Abramov' />
            <Text fontSize='sm'>Joseph Biden</Text>
          </Box>
        </MenuButton> 
        <MenuList>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default MenuDrawerHeader 
