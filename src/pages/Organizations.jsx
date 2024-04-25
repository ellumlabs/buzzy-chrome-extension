import { 
  Box,
  Input,
  Text,
  InputGroup,
  IconButton,
  InputLeftElement,
  Icon,
  Select,
  Divider,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { FaSearch, FaPlus } from "react-icons/fa"

const Organizations = () => {
  return (
    <Box display='flex' flexDirection='column' gap='4'>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Icon as={FaSearch} />
        </InputLeftElement>
        <Input placeholder='Search organizations' />
      </InputGroup>
      <Box display='flex' justifyContent='space-between'>
        <Select placeholder='Organization type' flex='0 0 45%'>
          <option value='option1'>Active</option>
          <option value='option2'>Archived</option>
        </Select>
        <IconButton aria-label='add-organization' icon={<FaPlus />} />
      </Box>
      <Box display='flex' flexDirection='column' alignItems='flex-start'>
        <Text>4 Organizations</Text>
        <Divider />
        <UnorderedList styleType="none" textAlign='left'>
          <ListItem>Manchester United</ListItem>
          <ListItem>Arsenal</ListItem>
          <ListItem>Liverpool</ListItem>
          <ListItem>Manchester City</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  )
}

export default Organizations
