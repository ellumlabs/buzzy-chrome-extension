import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'

const SettingsModal = ({isOpen, onClose}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display='flex' flexDirection='column' gap='2'>
            <Button variant='ghost' justifyContent="flex-start">Account</Button>
            <Button variant='ghost' justifyContent="flex-start">General</Button>
            <Button variant='ghost' justifyContent="flex-start">Subscriptions</Button>
            <Button variant='ghost' justifyContent="flex-start">Theme</Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SettingsModal 
