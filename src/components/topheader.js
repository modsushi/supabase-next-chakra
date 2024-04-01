import {
    Text, Heading, InputGroup, Tag, Input, Box, Container, Stack, 
    Menu, MenuButton, MenuItem, MenuList, Tabs, Show, Hide,TabList, Flex, Image, MenuDivider, Center, Button, Textarea, IconButton, Divider, useColorMode, Tooltip, Spinner, calc, TabPanels, TabPanel, Tab, Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineImport } from 'react-icons/ai'
import { MdLogin } from "react-icons/md";
import { FaRegHandshake, FaVideo } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { MdAccountCircle, MdHelp } from 'react-icons/md'
import { VscLibrary } from "react-icons/vsc";
import { SiStylelint } from "react-icons/si";
import { PiTelevisionSimpleBold } from "react-icons/pi";



export default function TopHeader({ onLogout, user }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter()
    const [credits, setCredits] = useState(null)

    return (<Box><Box display='flex' justifyContent={'space-between'} alignItems={'center'} zIndex={999} w={['100%','95%']} maxW={1400} position={'fixed'} top={0} backdropFilter={'blur(5px)'} pt={['15px', '20px', '25px']}>
                <Box display={'flex'} alignItems={'baseline'} gap={2} mt={[-3,0]} ml={[2,5]} textAlign={'center'} onClick={()=>{router.push('/')}} cursor='pointer'>
                <Heading _hover={{
                    color:'pink.500'
                }} transition={'all .2s ease-in-out'} fontSize={['lg','2xl']}>Masjid Labs</Heading></Box>
                
            <Box mt={0} mr={[5,0]}>
                <Flex direction={'row'} bg={`${colorMode === 'light' ? 'rgb(196 194 194 / 40%)' : '#2b3e616b'}`} borderRadius='30px' pr={[2, 5]} pl={[2, 5]} pt={2} pb={2} wrap='nowrap' gap={2}>
                    {
                        credits != null &&  <Box fontSize={['xs', 'xs', 'sm','sm','md']} cursor='pointer'
                        bg={`${colorMode === 'light' ? '#f7f7f7' : '#34405a'}`} display='flex' alignItems={'center'}
                        transition='250ms' pr='3' pl='3' pt='1' pb='1' _hover={{
                          background: 'purple.500',
                        }} borderRadius='10px' alignSelf='center'>
                            <FaCoins color='gold'/>
                        <Tooltip label="Credits"><Link ml={2}
                          style={{
                            textDecoration: 'none',
                            color: colorMode === 'light' ? '#444' : '#fefefe',
                            fontWeight: 'bold'
                          }} href='/pricing'><Text ml={2}>{credits}</Text></Link></Tooltip>
                      </Box>
                    }
                    {user &&
                        <Menu>
                            <MenuButton as={IconButton} size={['xs', 'sm']} isRound={true} aria-label='Settings' icon={<AiOutlineMenu />} />
                            <MenuList>
                            <MenuItem icon={<VscLibrary />} onClick={()=>{router.push('/library')}}>Library</MenuItem>
                            <MenuItem icon={<FaVideo />} onClick={()=>{router.push('/stylizevideo')}}>AI Filters</MenuItem>
                            <MenuItem icon={<SiStylelint />} onClick={()=>{router.push('/talkingvideo')}}>Talking Celebrities</MenuItem>
                            <MenuDivider />
                                <MenuItem icon={<FaCoins />} onClick={()=>{router.push('/pricing')}}>Buy Credits</MenuItem>
                                <MenuItem icon={<MdAccountCircle />} onClick={onLogout}>Sign Out</MenuItem>
                                <MenuItem href='/support' as={Link} icon={<MdHelp />} >Help</MenuItem>
                            </MenuList>
                        </Menu>
                    }
                    {!user &&
                        <>
                        <Link as={NextLink} href='/login?action=1'><Button size={['xs', 'sm']} leftIcon={<FaRegHandshake />}>Sign Up</Button></Link>
                        <Link as={NextLink} href='/login'><Button size={['xs', 'sm']} leftIcon={<MdLogin />}>Login</Button></Link>


                        </>

                    }
                    <Tooltip label={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}><IconButton size={['xs', 'sm']} isRound={true} aria-label='dark mode' fontSize={18} onClick={toggleColorMode}
                        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    ></IconButton></Tooltip>
                </Flex>
                <Center mt={1}>
                    {user && <Text fontSize={'xs'} color={colorMode === 'light' ? '#aaa' : '#90a8d0'}>{user.email}</Text>}
                </Center>
            </Box>
        </Box>
       
        </Box>)
}