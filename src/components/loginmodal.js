import {
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody, Input, Text, Box, Flex, Center,
    ModalCloseButton
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
const isEmail =  new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

export default function LoginModal({ isOpen, onClose, onOpen, triggerPayment, uemail }) {
    const router = useRouter();
    const [values, setValues] = React.useState({ email: '', password: '' })
    const [loading, setLoading] = React.useState(false)
    const [errormsg, setErrormsg] = React.useState(null)
    const handleSignUp = async () => {
        if (!values.email || !values.password) return;
        try {
            setLoading(true)
            setErrormsg(null)
            const data = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/javascript'
                },
                body: JSON.stringify(values)
            })
            if (!data.ok) {
                router.push('/login');
                return;
            }
            const resp = await data.json();
            setLoading(false)
            if (resp.user) {
                triggerPayment(resp.user)
                onClose();
            }
            else if (resp.user === null) {
                setErrormsg('A user with this email address has already been registered')
            }
        }
        catch (e) {
            setLoading(false)
            setErrormsg('Please try later or email support at hello@loudfame.com')
        }
    }

    React.useEffect(() => {
        if (uemail)
            setValues({ email: uemail, password: '' })
    }, [uemail])

    return <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontFamily="'Press Start 2P'">Sign Up</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={12}>
                    <Flex direction={'column'} gap={5}>
                        <Input placeholder='Email' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                        <Input placeholder='Password' value={values.password} minLength={6} maxLength={20} isRequired={true}
                             type='password' onChange={(e) => setValues({ ...values, password: e.target.value })} />
                    </Flex>
                    <Center mt={5}>
                        <Button isDisabled={!isEmail.test(values.email)} isLoading={loading} colorScheme='purple' mr={3} onClick={() => { handleSignUp() }}>
                            Sign Up
                        </Button>
                    </Center>
                    { errormsg && <Center mt={5}>
                        <Text fontSize='md' color='red.500'>{errormsg}</Text>
                    </Center>}
                </ModalBody>
                <Button variant='ghost' onClick={() => { router.push('/login') }}>
                    Already have an account?
                </Button>
            </ModalContent>
        </Modal>
    </>
}