import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Text, Heading, InputGroup, Tag, InputRightElement, Card, CardHeader, CardBody, CardFooter, useDisclosure,
  useToast, Input, Box, Tabs, Show, TabList, Flex, Center, Button, Textarea, IconButton, Divider, useColorMode, Tooltip, Spinner, calc, TabPanels, TabPanel, Tab, Icon
} from '@chakra-ui/react'
import TopHeader from '@/components/topheader'
import Footer from '@/components/footer'
import { useUser } from "@supabase/auth-helpers-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({client, onLogout}) {
  const user = useUser()
  return (
    <>
      <Head>
        <title>Next-Supa-Chakra</title>
        <meta name="description" content="Masjid Labs Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box pt={20} w={'97%'} minH={800} maxW={1400} m='0 auto' overflow='hidden'>
        <TopHeader onLogout={onLogout} user={user} />
        </Box>
      </main>
    </>
  );
}
