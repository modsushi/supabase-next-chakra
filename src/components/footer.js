import {Image, Icon, Box,Text, Flex, Divider} from '@chakra-ui/react';
import Link from 'next/link';
import { BiBorderRadius } from 'react-icons/bi';
import { FaXTwitter, FaInstagram, FaTiktok} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


export default function Footer({colorMode}) {
  return (
    <Box mt={5} p={5} borderRadius={8}>
      <Flex fontSize={['2xs','xs','sm'] } wrap='wrap' align="left" justify="space-between">
        <Box>
        <Flex align={'left'} w='160px' justify={'space-evenly'} mr={5}>
          <Text color={colorMode === 'light' ? '#aaa' : '#90a8d0'}>© {new Date().getFullYear()}</Text><Text color={colorMode === 'light' ? '#aaa' : '#90a8d0'} fontWeight={'bold'}>Loud Fame AI</Text>
          <Flex mt={5} justify={'space-between'}>
        {/* <Text color='#aaa' fontSize={['2xs','xs','sm']}>Made with <span style={{color:'red'}}>❤</span> by <a style={{color:'rgb(29, 155, 240)'}} rel='noreferrer' target='_blank' href='https://twitter.com/modsushi'>@modsushi</a></Text> */}
      </Flex>
        </Flex>
        <Divider mt={[1,2]} mb={[1,2]}/>
        {/* <Link href="/">Home</Link>
        <Spacer/>
        <Link href="/pricing">Pricing</Link>
        <Spacer />
        <Link href="/tos">Terms of Service</Link>
        <Spacer />
        <Link href="/support">Feedback and Support</Link> */}
              <Flex w='100%' align='left' justifyContent={'left'} flexWrap={'wrap'}>
                <Link href='/'><Text mr={5} fontSize={['2xs', 'xs']}>Home</Text></Link>
                <Link href='/stylizevideo'><Text mr={5} fontSize={['2xs', 'xs']}>Video to Anime</Text></Link>
                <Link href='/talkingvideo'><Text mr={5} fontSize={['2xs', 'xs']}>Talking Celebrities</Text></Link>               
                <Link href='/library'><Text mr={5} fontSize={['2xs','xs']}>Library</Text></Link>
                
                <Text mr={5} fontSize={['2xs', 'xs']}></Text>
                
              </Flex>
              <Flex>
              <Link href='/blog'><Text mr={5} fontSize={['2xs', 'xs']}>Blog</Text></Link>
                <Link href='/pricing'><Text mr={5} fontSize={['2xs', 'xs']}>Pricing</Text></Link>
                <Link href='/tos'><Text mr={5} fontSize={['2xs', 'xs']}>Terms of Service</Text></Link>
                <Text mr={5} fontSize={['2xs', 'xs']}>Responsible AI</Text>
                <Link href='mailto:hello@loudfame.com'><Text mr={5} fontSize={['2xs', 'xs']}>Contact</Text></Link>
              {/* <Text mr={5} fontSize={'small'}>Copyright {new Date().getFullYear()}</Text> */}
            </Flex>
        </Box>

            
        <Box mr={5} gap={5} display={'flex'} justify={'right'} align="right">
        <Link target='_blank' href='https://www.tiktok.com/@loudfame_ai'><Icon as={FaTiktok} w={8} h={8} color='#aaa'/></Link>
        
        <Link target='_blank' href='https://www.facebook.com/profile.php?id=61555941041824'><Icon as={FaFacebookSquare} w={8} h={8} color='#aaa'/></Link>
          <Link target='_blank' href='https://www.instagram.com/loudfamex/'><Icon as={FaInstagram} w={8} h={8} color='#aaa'/></Link>
          <Link target='_blank' href='https://x.com/loudfameai'><Icon as={FaXTwitter} w={8} h={8} color='#aaa'/></Link>
        </Box>
      </Flex>
      
    </Box>
  );
}