import { Box, Flex, List, ListItem, chakra } from "@chakra-ui/react"
import { Link, usePage } from "@inertiajs/inertia-react"
import AuthProfile from "./AuthProfile"
import Navbar from "./Navbar"
import { AiOutlineHome } from 'react-icons/ai'

const HomeIcon = chakra(AiOutlineHome)

const menu = [
  { name: 'Home', link: '/home', icon: <HomeIcon /> }
]

export default ({ children }) => {

  const { props, url } = usePage()
  const { appName } = props

  console.log(url);

  return (
    <Flex flexDirection={'column'} minH={'100vh'}>
      <Navbar
        appName={appName}
        end={<AuthProfile />}
      />
      <Box flexGrow={1} as={Flex}>
        <Box minW={'300px'} w={'300px'} borderRightColor={'gray.200'} borderRightWidth={'1px'}>

          <List p={2}>
            {menu.map((item, key) => (
              <ListItem
                key={key}
                as={Link}
                href={item.link}
                px={4} py={2}
                display={'block'}
                borderRadius={8}
                bg={url == item.link ? 'blue.500' : ''}
                color={'gray'}
                mb={2}
                _hover={{
                  bg: url == item.link ? 'blue.600' : 'gray.100',
                  color: 'gray.700'
                }}
              >
                <Flex 
                  alignItems={'center'} 
                  color={url == item.link ? 'white' : null}
                >
                  {item.icon}
                  <Box ml={4}>{item.name}</Box>
                </Flex>
              </ListItem>
            ))}
          </List>

        </Box>
        <Box flexGrow={1}>
          {children}
        </Box>
      </Box>
    </Flex>
  )
}