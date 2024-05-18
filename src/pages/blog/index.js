import { Box, Flex, Grid, GridItem, HStack, Icon, Divider, Center, Heading, Text, Button, SimpleGrid, useColorMode } from '@chakra-ui/react';
import Link from 'next/link'
import Head from 'next/head'
import { PiTelevisionSimpleBold } from "react-icons/pi";
import Footer from '@/components/footer';
import BLOGPOSTS from '@/utils/blogposts'

const bgColor = { light: 'gray.100', dark: 'gray.900' }
export default function Blog() {
    const { colorMode } = useColorMode()
    return (<>
    <Head>
        <title>Loud Fame AI Blog</title>
        <meta name="description" content="Nextjs, Supabase, ChakraUI, Pages Router" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box pt={10} w={'97%'} maxW={1400} m='0 auto'>
        <Box textAlign={['left', 'left', 'center']}><Heading fontFamily="'Press Start 2P'">Next-Supa-Chakra</Heading></Box>
        <Box display='flex' wrap='wrap' fontSize={['xs', 'sm']} justifyContent={'center'} alignItems={'center'} mt={5} gap={[0, 0, 3, 10]}>
            <Link href='/stylizevideo'><Text transition='.2s' color='pink.500' _hover={{ color: colorMode === 'light' ? 'pink.800' : 'pink.300' }}>Video to Anime</Text></Link>
            <Icon as={PiTelevisionSimpleBold} color={colorMode === 'light' ? 'purple.500' : '#90a8d0'} />

            <Link href='/talkingvideo'><Text transition='.2s' _hover={{ color: colorMode === 'light' ? 'pink.800' : 'pink.300' }} color='pink.500'>Talking Celebrities</Text></Link>
            <Icon as={PiTelevisionSimpleBold} color={colorMode === 'light' ? 'purple.500' : '#90a8d0'} />
            <Link href='/pricing'><Text transition='.2s' _hover={{ color: colorMode === 'light' ? 'pink.800' : 'pink.300' }} color='pink.500'>Buy Credits</Text></Link>
        </Box>

        <Divider mb={5} mt={5}></Divider>    <Box pl={12} minH={560}>
            <Heading pl={12} mt={12} mb={12} color='pink.500'>The latest chatter from our side.</Heading>
            <Flex gap={5} justify={'center'} wrap='wrap'>

                {
                    BLOGPOSTS.map((post) => {
                        return (<Post post={post} color={bgColor[colorMode]} key={post.params.slug} />)
                    })
                }
            </Flex>
        </Box>
        <Footer mt={20} colorMode={colorMode} />
    </Box>
    </>)
}

function Post({ post, color }) {
    return (<Box p={8} bg={color} mb={5} maxW={500} borderRadius={12}>
        <Link href={`/blog/${post.params.slug}`}><Text>{post.params.title}</Text></Link>
    </Box>)
}