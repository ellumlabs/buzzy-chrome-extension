import { Box, Text, Button, Tabs, TabList, TabPanels, Tab, TabPanel, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaPlusCircle, FaAngleDown } from "react-icons/fa"
import Feed from '../pages/Feed'

import useFetch from '../hooks/useFetch'

const Home = () => {
  const { data: sites, isPending, error } = useFetch('http://localhost:3000/sites')
  const sortedSites = sites && sites.sort((a, b) => new Date(b.timeAdded) - new Date(a.timeAdded))
  const siteCount = sortedSites && sortedSites.length

  return (
    <Box display='flex' flexDirection='column'>
      <Box display='flex' alignItems='center' justifyContent='space-between' mt='4' ml='4' mr='4'>
        <Text fontSize='2xl'>Buzzy</Text>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<Avatar size='sm' name='Kola Tioluwani' src='https://bit.ly/sage-adebayo' />}
              rightIcon={<FaAngleDown />}
            >
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' gap='4' w='100%' p='4'>
        <Button rightIcon={<FaPlusCircle />}>
          <Text>New Buzzy</Text>
        </Button>
        <Tabs variant='enclosed'>
          <TabList>
            <Tab>Feed</Tab>
            <Tab>Tags</Tab>
            <Tab>Organizations</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Feed />
            </TabPanel>
            <TabPanel>
              <p>Tags</p>
            </TabPanel>
            <TabPanel>
              <p>Organizations</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default Home 

