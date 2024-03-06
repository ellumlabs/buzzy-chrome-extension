import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

import MenuDrawerHeader from '../components/MenuDrawerHeader'

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button variant='ghost' _hover={{ bg: '#ffffff' }} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={!isOpen}
        onClose={onClose}
        placement='left'
      >
        <DrawerOverlay />
        <DrawerContent>
          <MenuDrawerHeader /> 
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MenuDrawer 
