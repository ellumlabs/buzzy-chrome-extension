import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Divider,
  List,
  ListItem,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'

import MenuDrawer from '../components/MenuDrawer'

import useFetch from '../hooks/useFetch'

const Home = () => {
  const { data: sites, isPending, error } = useFetch('http://localhost:3000/sites')
  const sortedSites = sites && sites.sort((a, b) => new Date(b.timeAdded) - new Date(a.timeAdded))
  const siteCount = sortedSites && sortedSites.length

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start'>
      <MenuDrawer />
      <Box display='flex' flexDirection='column' gap='4' w='100%' pl='10' pr='10'>
        <Button>
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
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Text fontSize='lg'>Sites</Text>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
          </InputLeftElement>
          <Input placeholder='Search sites' />
        </InputGroup>
        <Box display='flex'>
          <Button
            colorScheme='blue'
            size='sm'
          />
        </Box>
        <Box>
          {isPending ? <Text fontSize="sm">Loading...</Text> : <Text fontSize='sm'>{siteCount} Sites</Text>}
          
          <Divider />
          <List>
            {sortedSites && (
              sortedSites.map((site) => (
                <ListItem>
                  <Button variant="ghost" w="100%" justifyContent='flex-start'>
                    {site.url}
                  </Button>
                </ListItem>
              ))
            )}
          </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Home 

