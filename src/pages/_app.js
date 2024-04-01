
import "@/styles/globals.css";
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import {useState} from 'react'
import { useRouter } from 'next/router'

export default function MasjidLabs({ Component, pageProps }) {

  const theme = extendTheme({
    config: {
      initalColorMode: 'dark',
      useSystemColorMode: true,
    },
    fonts: {
      heading: `'Outfit', sans-serif`,
    },
    styles: {
      global: {
        body: {

        },
        heading: {
          FontFace: 'Outfit',
        },
        a: {
          color: 'blue.500',
          _hover: {
            textDecoration: 'underline',
          },
        },
      },
    },
  })

  const [supabaseClient] = useState(() => createPagesBrowserClient())
  const router = useRouter()
  const onLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()
    if (!error) {
      //redirect
      router.push("/")
    }
  }
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={'dark'} />
          <Component {...pageProps} onLogout={onLogout} client={supabaseClient} />
        </ChakraProvider>

    </SessionContextProvider>
  )
}
