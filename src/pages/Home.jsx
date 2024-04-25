import { Box, Text, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FaPlusCircle } from "react-icons/fa"
import colors from '../constants/colors'
import Header from '../components/Header'
import Feed from '../pages/Feed'
import Tags from '../pages/Tags'
import Organizations from '../pages/Organizations'

import useFetch from '../hooks/useFetch'

const Home = () => {
  const { data: sites, isPending, error } = useFetch('http://localhost:3000/sites')
  const sortedSites = sites && sites.sort((a, b) => new Date(b.timeAdded) - new Date(a.timeAdded))
  const siteCount = sortedSites && sortedSites.length
  return (
    <Box display='flex' flexDirection='column' gap='4'>
      <Box as='header' pt='4' pl='4' pr='4' position='sticky' top='0' zIndex='sticky' width='full' bg='white'>
        <Header />
      </Box>
      <Box pl='4' pr='4'>
        <Button 
          rightIcon={<FaPlusCircle />}
          w='100%'
          backgroundColor={colors.primary}
          _hover={{ bg: colors.primaryHover }}
          _active={{
            bg: colors.primaryActive
          }}
        >
          <Text>New Buzzy</Text>
        </Button>
      </Box>
      <Box display='flex' flexDirection='column' gap='4' w='100%' pl='4' pr='4'>
        <Tabs variant='enclosed' align='center' isFitted>
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
              <Tags />
            </TabPanel>
            <TabPanel>
              <Organizations />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

export default Home 

