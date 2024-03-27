import { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Text, Link, Button, Avatar, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaTrash, FaLink, FaAngleDown, FaCheckCircle, FaHourglassHalf, FaHourglassStart } from "react-icons/fa"

const FeedItemCard = ({ title, message, url, status }) => {
  const [itemStatus, setItemStatus] = useState(status)
  
  let StatusIcon = null

  switch (itemStatus) {
    case 'todo':
      StatusIcon = FaHourglassStart
      break
    case 'in progress':
      StatusIcon = FaHourglassHalf
      break
    case 'done':
      StatusIcon = FaCheckCircle
      break
    default:
      StatusIcon = FaAngleDown 
  }

  return (
    <Box p='2' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center' gap='2'>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Text as='b' fontSize='md'>{title}</Text>
        </Box>
        <IconButton
          variant='outline'
          aria-label='Send email'
          icon={<FaTrash />}
        />
      </Box>

      <Box p='2' mt='2' display='flex' flexDirection='column' gap='2' backgroundColor='#F3F3F3' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Text as='b'>{message}</Text>
        <Link href='#' isExternal>{url}</Link>
        <Box display='flex' gap='2'>
          <Button rightIcon={<FaLink />} size='xs' variant='outline'>
            Link
          </Button>
          <Button size='xs' variant='outline'>
            Reply (3) 
          </Button>         
          <Menu>
            <MenuButton as={Button} size='xs' variant='outline' rightIcon={<StatusIcon />}>
              Status 
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setItemStatus('')}>none</MenuItem>
              <MenuItem onClick={() => setItemStatus('todo')}>todo</MenuItem>
              <MenuItem onClick={() => setItemStatus('in progress')}>in progress</MenuItem>
              <MenuItem onClick={() => setItemStatus('done')}>done</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

FeedItemCard.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  url: PropTypes.string,
  status: PropTypes.string,
}

export default FeedItemCard 
