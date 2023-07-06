import React from 'react';
import { Button, Flex, FormControl, Heading, Input, Stack, Image, Center, Text } from '@chakra-ui/react';
import { FcFeedback, FcGoogle, FcTabletAndroid } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
const Login = () => {
  return (
    <Stack backgroundColor={'#EDEBF1'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex align={'center'} direction={'column'} mt={40} flex={1}>
        <Image width={'450px'} height={'284px'} alt={'Login Image'} src={'Images/Group-626217.png'} />
        <Stack width={'450px'} borderTop={'1px solid #9CA3AF'}>
          <Center ml={40} width={40} backgroundColor={'#EDEBF1'} mt={-3}>
            <Text>or login through</Text>
          </Center>

          <Flex gap={20}>
            <Button
              border={'1px solid #773FC6'}
              borderRadius={'7px'}
              w={'200px'}
              variant={'outline'}
              leftIcon={<FcGoogle />}
            >
              <Center>
                <Text>GOOGLE</Text>
              </Center>
            </Button>
            <Button
              border={'1px solid #773FC6'}
              borderRadius={'7px'}
              w={'200px'}
              // colorScheme={'facebook'}

              leftIcon={<FaFacebook />}
            >
              <Center>
                <Text> FACEBOOK</Text>
              </Center>
            </Button>
          </Flex>
          <Flex mt={25} gap={20}>
            <Button
              border={'1px solid #773FC6'}
              borderRadius={'7px'}
              w={'200px'}
              variant={'outline'}
              leftIcon={<FcTabletAndroid />}
            >
              <Center>
                <Text> MOBILE</Text>
              </Center>
            </Button>
            <Button
              border={'1px solid #773FC6'}
              borderRadius={'7px'}
              w={'200px'}
              // colorScheme={'facebook'}
              leftIcon={<FcFeedback />}
            >
              <Center>
                <Text> EMAIL</Text>
              </Center>
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Flex width={'552px'} direction={'column'} p={10} flex={1} align={'center'} justify={'center'}>
        <Heading m={30} fontWeight={700} fontSize={'40px'}>
          Login
        </Heading>
        <Stack borderRadius={'10px'} border={'1px solid #773FC640'} spacing={3} w={'full'} maxW={'md'}>
          <FormControl p={5} id='name'>
            <Input opacity={'0.5'} border={'1px solid #B4B3B3'} placeholder='Your full name*' type='name' isRequired />
          </FormControl>

          <FormControl p={5} id='password'>
            <Input opacity={'0.5'} border={'1px solid #B4B3B3'} placeholder='enter a password*' type='password' />
          </FormControl>

          <Stack p={5} spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'}>
              <Flex width={'552px'} direction={'column'} p={8} flex={1} align={'center'} justify={'center'}>
                <Heading fontWeight={700} fontSize={'35px'}>
                  Login
                </Heading>
              </Flex>
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Login;
