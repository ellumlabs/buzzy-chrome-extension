import { Box, Text, Link, Button, Avatar,IconButton } from '@chakra-ui/react'
import { FaTrash, FaLink, FaCheckCircle } from "react-icons/fa"

const FeedItemCard = () => {
  return (
    <Box p='2' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center' gap='2'>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Text as='b' fontSize='md'>Konstantin buzzed you</Text>
        </Box>
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='Send email'
          icon={<FaTrash />}
        />
      </Box>

      <Box p='2' mt='2' display='flex' flexDirection='column' gap='2' backgroundColor='#F3F3F3' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Text as='b'>@Kevin and @Josh lets use a different image for this card</Text>
        <Link href='#' isExternal>https://hackernews.com/news</Link>
        <Box display='flex' gap='2'>
          <Button rightIcon={<FaLink />} size='xs' colorScheme='teal' variant='outline'>
            Link
          </Button>
          <Button colorScheme='teal' size='xs' variant='outline'>
            Reply (3) 
          </Button>
          <Button rightIcon={<FaCheckCircle />} size='xs' colorScheme='teal' variant='outline'>
            Status  
          </Button>         
        </Box>
      </Box>
    </Box>
  )
}

export default FeedItemCard 
