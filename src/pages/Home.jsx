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
import Feed from '../pages/Feed'

import useFetch from '../hooks/useFetch'

const Home = () => {
  const { data: sites, isPending, error } = useFetch('http://localhost:3000/sites')
  const sortedSites = sites && sites.sort((a, b) => new Date(b.timeAdded) - new Date(a.timeAdded))
  const siteCount = sortedSites && sortedSites.length

  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start'>
      <MenuDrawer />
      <Box display='flex'>
        <Text>Buzzy</Text>
        <Text>Logo</Text>
      </Box>
      <Box display='flex' flexDirection='column' gap='4' w='100%'>
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
              <Feed />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default Home 

