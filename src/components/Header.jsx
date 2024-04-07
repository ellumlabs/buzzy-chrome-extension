import { Box, Text, Button, Avatar, Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react'
import { FaAngleDown } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import logo from '../assets/buzzy-logo.png'


const Header = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <Box display='flex' alignItems='center' gap='2'>
        <Image src={logo} boxSize='40px' alt='Dan Abramov' />
        <Text fontSize='xl' as='b'>Buzzy</Text>
      </Box>
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
            <MenuItem icon={<FaGear />}>
              Settings
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header
