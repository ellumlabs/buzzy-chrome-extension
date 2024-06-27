import {
  Box,
  Input,
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

const AddOrganizationModal = ({isOpen, onClose}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add organization</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display='flex' flexDirection='column' gap='2'>
            <Input
              size='sm'
              placeholder='Name'
            />
            <Input
              size='sm'
              placeholder='Color'
            />
            <Input
              size='sm'
              placeholder='Members'
            />
          </Box>
        </ModalBody>
        <ModalFooter gap='2'>
          <Button onClick={onClose}>Cancel</Button>
          <Button>Add</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddOrganizationModal 
