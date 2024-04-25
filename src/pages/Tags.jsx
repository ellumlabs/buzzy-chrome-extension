import { Box, Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react'
import { FaSearch } from "react-icons/fa"

import FeedItemCard from '../components/FeedItemCard'

const Tags = () => {
  return (
    <Box display='flex' flexDirection='column' gap='2'>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Icon as={FaSearch} />
        </InputLeftElement>
        <Input placeholder='Search by tags/users/comments' />
      </InputGroup>
      <FeedItemCard 
        title='#urgent'
        message='@Kevin and @Josh lets use a different image for this card'
        url='https://hackernews.com/news'
        status='todo'
      />
      <FeedItemCard 
        title='#brainstorm #inspiration'
        message='This is an interesting layout'
        url='https://hackernews.com/news/1384833'
        status='in progress'
      />
      <FeedItemCard 
        title='#urgent #quickfix'
        message='Why does this button not click?'
        url='https://hackernews.com/items'
        status='done'
      />
    </Box>
  )
}

export default Tags 
