import { Box, Text, Button, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaAngleDown } from "react-icons/fa"

const Header = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <Text fontSize='2xl'>Buzzy</Text>
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            variant='ghost'
            paddingLeft='1'
            paddingRight='1'
            leftIcon={<Avatar size='sm' name='Kola Tioluwani' src='https://bit.ly/sage-adebayo' />}
            rightIcon={<FaAngleDown />}
          >
            <Text>Giannis</Text>
          </MenuButton>
          <MenuList>
            <MenuItem>Settings</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header