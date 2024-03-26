import {
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'

import FeedList from '../components/Feed'

const Feed = () => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
        </InputLeftElement>
        <Input placeholder='Search sites' />
      </InputGroup>
      <FeedList />
    </div>
  )
}

export default Feed 
