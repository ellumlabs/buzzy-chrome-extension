import { Box, Text, Button, Avatar, Menu, MenuButton, MenuList, MenuItem, Image, useDisclosure } from '@chakra-ui/react'
import { FaAngleDown } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"
import logo from '../assets/buzzy-logo.png'
import SettingsModal from './SettingsModal'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <SettingsModal isOpen={isOpen} onClose={onClose} />
          <MenuList>
            <MenuItem icon={<FaGear />} onClick={onOpen}>
              Settings
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default Header
