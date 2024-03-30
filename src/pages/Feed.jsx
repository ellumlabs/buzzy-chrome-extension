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
      <FeedItemCard 
        title='Konstantin buzzed you'
        message='@Kevin and @Josh lets use a different image for this card'
        url='https://hackernews.com/news'
        status='todo'
      />
      <FeedItemCard 
        title='Vlad buzzed you'
        message='@Kevin rephrase this to showcase our new launch'
        url='https://hackernews.com/news/1384833'
        status='in progress'
      />
      <FeedItemCard 
        title='Konstantin buzzed you'
        message='@Kevin can we convert this to a sorted list'
        url='https://hackernews.com/items'
        status='done'
      />
    </Box>
  )
}

export default Feed 
