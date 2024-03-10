import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Button,
  DrawerHeader,
  DrawerBody,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  useDisclosure
} from '@chakra-ui/react'

import { HamburgerIcon, Search2Icon, ChatIcon, DragHandleIcon } from '@chakra-ui/icons'

import MenuDrawerHeader from '../components/MenuDrawerHeader'

import { PLACEHOLDER_SITES_LIST } from '../constants/constants'

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button variant='ghost' _hover={{ bg: '#ffffff' }} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement='left'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <MenuDrawerHeader /> 
          </DrawerHeader>
          <DrawerBody>
            <Box display='flex' flexDirection='column' gap='4'>
              <Box display='flex' flexDirection='column' gap='2'>
                <Button leftIcon={<Search2Icon />} colorScheme='yellow' variant='ghost' justifyContent='flex-start'>
                  <Text>Search</Text>
                </Button>
                <Button leftIcon={<ChatIcon />} colorScheme='yellow' variant='ghost' justifyContent='flex-start'>
                  <Text>Inbox</Text>
                </Button>
                <Button leftIcon={<DragHandleIcon />} colorScheme='yellow' variant='ghost' justifyContent='flex-start'>
                  <Text>Filters and Labels</Text>
                </Button>
              </Box>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' onClick={() => console.log('i was clicked')}>
                      <Text as='u'>My Sites</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  {
                    PLACEHOLDER_SITES_LIST.map(site => (
                      <AccordionPanel p={0}>
                        <Button colorScheme='yellow' variant='ghost' w='100%' justifyContent='flex-start'>
                          <Text>{site.url}</Text>
                        </Button>
                      </AccordionPanel>
                    ))
                  }
                </AccordionItem>
              </Accordion>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MenuDrawer 
