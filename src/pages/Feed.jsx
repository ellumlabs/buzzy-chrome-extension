import { Box, Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa"

import FeedItemCard from '../components/FeedItemCard'

const Feed = () => {
  return (
    <Box display='flex' flexDirection='column' gap='2'>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Icon as={FaSearch} />
        </InputLeftElement>
        <Input placeholder='Search by tags/users/comments' />
      </InputGroup>
      <FeedItemCard />
    </Box>
  )
}

export default Feed 
