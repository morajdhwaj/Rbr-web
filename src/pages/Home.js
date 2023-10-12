import React, { useRef } from 'react';
import '../global.css';

import ReactPlayer from 'react-player';
import {
  Stack,
  Flex,
  Text,
  Container,
  UnorderedList,
  ListItem,
  Heading,
  SimpleGrid,
  Image,
  Grid,
  VStack,
  Center,
  Button,
  GridItem,
  Avatar,
  useColorModeValue,
  StackDivider,
  Link,
  Box,
  StatNumber,
  StatLabel,
  Stat,
  border,
} from '@chakra-ui/react';

import {} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Home = () => {
  const SlideRef = useRef();

  const StoriesSliderData = [
    {
      HeadFont: 'No online course could have helped me this way',
      Text: 'A RetPro helped me realize that my aspirations were leaning more towards Data sciences than what I am currently doing',
      UserDp: 'Images/Ellipse-38.png',
      UserName: 'Wilson Thai',
      UserAddr: 'Ontario, Canada',
      UserStar: '',
    },
    {
      HeadFont: 'I have been rewarded with both help and loyalty',
      Text: 'The retired professional who is currently working with me to improve my language proficiency in French, is extremely punctual and passionate about teaching',
      UserDp: 'Images/Ellipse-39.png',
      UserName: 'Milena Belmar',
      UserAddr: 'Argentina',
      UserStar: '',
    },
    {
      HeadFont: 'No online course could have helped me this way',
      Text: 'A RetPro helped me realize that my aspirations were leaning more towards Data sciences than what I am currently doing',
      UserDp: 'Images/Ellipse-38.png',
      UserName: 'Wilson Thai',
      UserAddr: 'Ontario, Canada',
      UserStar: '',
    },
    {
      HeadFont: 'I have been rewarded with both help and loyalty',
      Text: 'The retired professional who is currently working with me to improve my language proficiency in French, is extremely punctual and passionate about teaching',
      UserDp: 'Images/Ellipse-39.png',
      UserName: 'Milena Belmar',
      UserAddr: 'Argentina',
      UserStar: '',
    },
  ];

  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SimpleGrid height={'100vh'} backgroundColor={'#F8F8F88A'} columns={{ base: 1, md: 2 }}>
            <Flex
              display={{ base: 'none', md: 'flex' }}
              className='main_header'
              width={'140%'}
              //   position={'relative'}
              flexWrap={'wrap'}
              justify={'center'}
              align={'flex-end'}
            >
              <Heading
                ml={24}
                color={'#2F327D'}
                fontWeight={700}
                fontSize={{ base: '4xl', sm: '3xl', md: '6xl' }}
                lineHeight={'120%'}
                fontFamily={'Ubuntu'}
              >
                The world's only platform and community for retired professionals
              </Heading>
              <Heading color={'#2F327D'} fontSize={64}></Heading>
            </Flex>
            <Flex
              display={{ base: 'inline', md: 'none' }}
              className='main_header'
              position={'relative'}
              flexWrap={'wrap'}
              justify={'center'}
              align={'flex-end'}
            >
              <Heading
                color={'#2F327D'}
                fontWeight={700}
                fontSize={{ base: '4xl', sm: '3xl', md: '5xl' }}
                lineHeight={'120%'}
                fontFamily={'Ubuntu'}
              >
                The world's only platform and community for retired professionals
              </Heading>
              <Heading color={'#2F327D'} fontSize={64}></Heading>
            </Flex>

            <Flex mt={-4} position={'relative'} align={'center'} justifyContent={'center'} flexWrap={'wrap'}>
              <Stack
                mt={-4}
                display={{ base: 'none', md: 'flex' }}
                style={{
                  height: '100vh',
                  objectFit: 'cover',
                  filter: 'brightness(1)',
                }}
              >
                <Flex flexWrap={'wrap'}>
                  <Stack
                    ml={'520px'}
                    mt={'220px'}
                    height={'550px'}
                    width={'250px'}
                    roundedLeft={'full'}
                    position={'relative'}
                    backgroundColor={'#46B40F40'}
                  ></Stack>
                  <Stack
                    mt={'480px'}
                    zIndex={'99'}
                    position={'absolute'}
                    ml={'100px'}
                    style={{
                      //   height: '20vh',
                      objectFit: 'cover',
                      filter: 'brightness(1)',
                    }}
                  >
                    <Stat
                      px={{ base: 2, md: 4 }}
                      py={'5'}
                      ml={4}
                      shadow={'xl'}
                      backgroundColor={'#FFFFFF'}
                      rounded={'2xl'}
                    >
                      <Flex ml={3} justifyContent={'space-between'}>
                        <Box
                          height={12}
                          width={12}
                          rounded={'3xl'}
                          my={'auto'}
                          backgroundColor={'#F9AE34'}
                          align={'center'}
                        >
                          <Image mt={2} height={8} width={8} src='/Images/Vector.png'></Image>
                        </Box>
                        <Box pl={{ base: 2, md: 4 }}>
                          <StatLabel color={'#111231'} fontSize={'2xl'} fontWeight={'medium'} fontFamily={'Inter'}>
                            100,000+
                          </StatLabel>
                          <StatNumber
                            fontSize={'2xm'}
                            fontWeight={500}
                            isTruncated
                            fontFamily={'Inter'}
                            color={'Inter'}
                          >
                            Connections
                          </StatNumber>
                        </Box>
                      </Flex>
                    </Stat>
                    <Box
                      //   position={'relative'}
                      mt={-6}
                      width={14}
                      backgroundColor={'#B8DCFF'}
                      height={14}
                      rounded={'full'}
                    ></Box>
                  </Stack>
                  <Image
                    mt={8}
                    position={'absolute'}
                    ml={56}
                    className='image'
                    style={{
                      height: '10vh',

                      objectFit: 'cover',
                      filter: 'brightness(1)',
                    }}
                    src='Images/14.png'
                    alt='slides'
                  />

                  <Image
                    mt={14}
                    ml={36}
                    position={'absolute'}
                    className='image'
                    style={{
                      height: '85vh',
                      objectFit: 'cover',
                      filter: 'brightness(1)',
                    }}
                    src='Images/13.png'
                    alt='slides'
                  />
                </Flex>
              </Stack>
              <Stack
                display={{ base: 'inline', md: 'none' }}
                style={{
                  height: '100vh',
                  objectFit: 'cover',
                  filter: 'brightness(1)',
                }}
              >
                <Flex flexWrap={'wrap'}>
                  <Stack
                    ml={'850px'}
                    mt={'100px'}
                    height={'100px'}
                    width={'100px'}
                    roundedLeft={'full'}
                    position={'relative'}
                    backgroundColor={'#46B40F40'}
                  ></Stack>
                  <Stack
                    mt={'400px'}
                    zIndex={'99'}
                    position={'absolute'}
                    ml={'250px'}
                    style={{
                      //   height: '10vh',
                      objectFit: 'cover',
                      filter: 'brightness(1)',
                    }}
                  >
                    <Stat
                      px={{ base: 2, md: 4 }}
                      py={'5'}
                      ml={4}
                      shadow={'xl'}
                      backgroundColor={'#FFFFFF'}
                      rounded={'2xl'}
                    >
                      <Flex ml={4} justifyContent={'space-between'}>
                        <Box height={12} width={12} rounded={'3xl'} my={'auto'} backgroundColor={'#F9AE34'}>
                          <Image ml={2} mt={2} height={8} width={8} src='/Images/Vector.png'></Image>
                          {/* {<BsPerson size={'3em'} />} */}
                        </Box>
                        <Box pl={{ base: 2, md: 4 }}>
                          <StatLabel fontSize={'2xl'} fontWeight={'medium'}>
                            100,000+
                          </StatLabel>
                          <StatNumber fontSize={'2xm'} fontWeight={'medium'} isTruncated>
                            Connections
                          </StatNumber>
                        </Box>
                      </Flex>
                    </Stat>
                    <Box
                      //   position={'relative'}
                      mt={-6}
                      width={14}
                      backgroundColor={'#B8DCFF'}
                      height={14}
                      rounded={'full'}
                    ></Box>
                  </Stack>
                  <Image
                    mt={8}
                    overflow={'hidden'}
                    position={'absolute'}
                    ml={56}
                    height={'53.25px'}
                    width={'53.58'}
                    className='image'
                    style={
                      {
                        //   height: '53.25px',
                        //   width: '53.58',
                        //   objectFit: 'cover',
                        //   filter: 'brightness(1)',
                      }
                    }
                    src='Images/14.png'
                    alt='slides'
                  />

                  <Image
                    mt={14}
                    ml={36}
                    position={'absolute'}
                    className='image'
                    style={{
                      height: '85vh',
                      objectFit: 'cover',
                      //   filter: 'brightness(1)',
                    }}
                    src='Images/13.png'
                    alt='slides'
                  />
                </Flex>
              </Stack>
              {/* <div className='semi-circle_one'></div> */}
            </Flex>
          </SimpleGrid>
        </SwiperSlide>
        <SwiperSlide>
          <Stack position={'relative'} m={0} borderRadius={'10%'}>
            <video
              autoPlay
              loop
              muted
              style={{
                height: '90vh',
                objectFit: 'fill',
                filter: 'brightness(1)',
              }}
              src='Images/RBR V4 WhatsApp.mp4'
              alt='slides'
            />
          </Stack>
        </SwiperSlide>
        ...
      </Swiper>
      <Stack mt={-24} backgroundColor={'#EDEBF1'}>
        <Container maxW={'7xl'} mb={10} mt={28}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            <Stack spacing={10}>
              <Heading fontSize={44} color={'#2F327D'} fontFamily={'Ubuntu'}>
                Where young minds meet industrious retirees
              </Heading>

              <Stack
                maxWidth={'499px'}
                divider={<StackDivider borderColor={useColorModeValue('#606176', 'gray.700')} />}
              >
                <Text align={'justify'} fontSize={24} fontFamily={'Ubuntu'}>
                  Retired professionals have a wealth of knowledge, wisdom and skills that can be beneficial to
                  currently employed professionals. Retired But Ready is where this juncture is made possible.
                </Text>
              </Stack>
              <Link href='/Register'>
                <Button
                  fontFamily={'Ubuntu'}
                  width={'320px'}
                  rounded={'full'}
                  height={'70px'}
                  // px={6}
                  fontSize={'34px'}
                  colorScheme={'orange'}
                  bg={'orange.400'}
                  _hover={{ bg: 'orange.500' }}
                >
                  Start your journey
                </Button>
              </Link>
            </Stack>

            <Flex height={350}>
              {/* <ReactPlayer
                className={'react-player'}
                playing={true}
                playIcon={true}
                playbackRate={1}
                controls={true}
                url={'Images/RBR V4 WhatsApp.mp4'}
              /> */}
              <video autoPlay controls poster='Images/Mask-group.png'>
                <source style={{ borderRadius: '20%' }} src='Images/RBR V4 WhatsApp.mp4' type='video/mp4' />
              </video>
            </Flex>
          </SimpleGrid>
        </Container>
        <div className='semi-circle'></div>
        {/* <Container
          backgroundColor={'#6300FF0F'}
          borderRadius={'md'}
          border={'1px solid #6300FF0F'}
          height={'600px'}
          maxW={'8xl'}
          mt={24}
        >
          <Flex align={'center'} justify={'center'}>
            <Grid
              // className='retpro_spsl'
              templateColumns={{
                base: 'repeat(1, 1fr)',
                // sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
            >
              <GridItem colSpan={1}>
                <VStack spacing={4}>
                  <Heading fontSize={44} fontWeight='700' color={'#2F327D'}>
                    Introducing
                  </Heading>
                  <Heading fontSize={112} fontWeight='1000' color={'#773FC6'}>
                    RetPro
                  </Heading>
                  <Text align={'center'} color={'#2F327D'} fontSize={44} fontWeight={'700'}>
                    for retired professionals
                  </Text>
                </VStack>
              </GridItem>
              <GridItem>
                <Center>
                  <Link href='/Register'>
                    <Button
                      height={'90px'}
                      width={'292px'}
                      rounded={'2xl'}
                      colorScheme={''}
                      bg={'#773FC6'}
                      fontSize={'30px'}
                      fontWeight={'700'}
                    >
                      Start your journey
                    </Button>
                  </Link>
                </Center>
              </GridItem>
            </Grid>
          </Flex>
        </Container> */}
        <Stack
          ml={'30px'}
          marginRight={4}
          mt={20}
          backgroundColor={'#6300FF0F'}
          maxW={'full'}
          minH={'90vh'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex p={6} flexWrap={'wrap'} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={2} w={'90%'} maxW={'lg'}>
              <VStack spacing={8}>
                <Heading fontSize={44} color={'#2F327D'} fontFamily={'Ubuntu'}>
                  Introducing
                </Heading>
                <Heading fontSize={{ base: '94', sm: '94', md: '112' }} fontWeight='1000' color={'#773FC6'}>
                  RetPro
                </Heading>
                <Heading align={'center'} fontSize={44} color={'#2F327D'} fontFamily={'Ubuntu'}>
                  for retired professionals
                </Heading>
              </VStack>
            </Stack>
          </Flex>
          <Flex justify={'center'} flex={1}>
            <Center>
              <Link href='/Register'>
                <Button
                  height={'90px'}
                  width={'292px'}
                  rounded={'2xl'}
                  colorScheme={''}
                  bg={'#773FC6'}
                  fontSize={'34px'}
                  fontWeight={'700'}
                  fontFamily={'Ubuntu'}
                >
                  Start your journey
                </Button>
              </Link>
            </Center>
          </Flex>
        </Stack>
        {/* <Container
        backgroundColor={'#55FF001F'}
        borderRadius={'md'}
        border={'1px solid #55FF001F'}
        height={'554px'}
        maxW={'8xl'}
        mt={40}
      >
        <Grid
          templateColumns={{
            md: 'repeat(2, 1fr)',
          }}
          gap={10}
          mt={'130px'}
        >
          <GridItem colSpan={1}>
            <Center mt={'80px'}>
              <Link href='/Register'>
                <Button
                  height={'90px'}
                  width={'292px'}
                  rounded={'2xl'}
                  colorScheme={''}
                  bg={'#46B40F'}
                  fontSize={'30px'}
                  fontWeight={'700'}
                >
                  Start your journey
                </Button>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Flex>
              <VStack ml={'20px'} spacing='15px'>
                <Heading fontSize={44} fontWeight='700' color={'#2F327D'}>
                  Currently working?
                </Heading>
                <Heading fontSize={120} fontWeight='1000' color={'#46B40F'}>
                  JunPro
                </Heading>
                <Text fontSize={44} fontWeight={'700'}>
                  for employed professionals
                </Text>
              </VStack>
            </Flex>
          </GridItem>
        </Grid>
      </Container> */}
        <Container borderRadius={'md'} height={'50px'} maxW={'6xl'} mt={24}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 2fr)',
              //   sm: 'repeat(2, 1fr)',
            }}
          >
            <GridItem align={'start'} colSpan={1}>
              <Heading fontSize={44} color={'#2F327D'} fontFamily={'Ubuntu'}>
                Ask us how we are transforming lives.
              </Heading>
            </GridItem>
            <GridItem align={'center'}>
              <Button
                m={2}
                _hover={{
                  color: 'white',
                  backgroundColor: '#2F327D',
                }}
                fontSize={'24px'}
                border={'2px solid #2F327D'}
                borderRadius={'3xl'}
                height={'48px'}
                width={'250px'}
                fontFamily={'Ubuntu'}
              >
                Let's Chat
              </Button>
              <Link href='/Callme'>
                <Button
                  _hover={{
                    color: 'white',
                    backgroundColor: '#46B40F',
                  }}
                  m={2}
                  fontSize={'24px'}
                  // ml={'30px'}
                  border={'2px solid #46B40F'}
                  borderRadius={'3xl'}
                  height={'48px'}
                  width={'250px'}
                  fontFamily={'Ubuntu'}
                >
                  Request Callback
                </Button>
              </Link>
            </GridItem>
          </Grid>
        </Container>
        <Container position={'relative'} overflow={'hidden'} height={'554px'} maxW={'7xl'} mt={'235px'}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 2fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            // mt={'50px'}
          >
            <GridItem colSpan={1} mt={'30px'} ml={4} justifyContent={'center'}>
              <Image src='Images/Group-114.png' alt='oldman' />
            </GridItem>
            <Flex width={490} align={'center'} direction={'column'}>
              <Heading color={'#2F327D'} fontWeight={'bold'} fontFamily={'Ubuntu'} fontSize={44}>
                So much you can do with{' '}
              </Heading>

              <br />
              <GridItem height={'64px'} width={'140px'}>
                <img src='Images/Ret-pro-logo 2.png' alt='' />
              </GridItem>
              <GridItem>
                <Text fontSize={24} color={'#2F327D'} fontFamily={'Ubuntu'}>
                  (your skills are all you need to begin)
                </Text>
              </GridItem>
              <GridItem align={'center'} flexWrap={'wrap'} width={700} mt={12} justifyContent={'start'}>
                <img src='Images/Group-626024.png' alt='' />
              </GridItem>
            </Flex>
          </Grid>
        </Container>
        {/* <Container overflow={'hidden'} height={'554px'} maxW={'6xl'} mt={20}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            mt={'50px'}
          >
            <Flex flexWrap={'wrap'} direction={'column'} justifyContent={'start'} align={'center'}>
              <Heading mr={20} color={'#2F327D'} fontWeight={'bold'} fontSize={44}>
                Fastrack your career with{' '}
              </Heading>

              <br />
              <GridItem mr={20} height={'64px'} width={'140px'}>
                <img src='Images/JunPro-2.png' alt='' />
              </GridItem>
              <GridItem mr={20}>
                <Text fontSize={20} color={'#000000'}>
                  (your skills are all you need to begin)
                </Text>
              </GridItem>
              <GridItem width={700} mt={12} justifyContent={'center'}>
                <img src='Images/Group-626024.png' alt='' />
              </GridItem>
            </Flex>
            <GridItem width={'308px'} colSpan={1} justifyContent={'center'}>
              <Image src='Images/How-it-works.png' alt='oldman' />
            </GridItem>
          </Grid>
        </Container>{' '} */}
        <Container overflow={'hidden'} align={'center'} maxW={'9xl'} mt={20}>
          <Heading fontSize={44} display={'inline-block'} align={'center'} fontFamily={'Poppins'} color={'#2F327D'}>
            Meet the <span style={{ color: '#773FC6', fontSize: '64px' }}>RetPro </span>
            area experts
          </Heading>
          <Flex flexWrap={'wrap'} justifyContent={'space-evenly'} mt={8}>
            <Flex
              width={'235px'}
              border={'1px solid #773FC680'}
              borderRadius={'20px'}
              align={'center'}
              mt={8}
              direction={'column'}
            >
              <Avatar src='Images/Business-1.png' alt='name' p={2} mb={4} width={130} height={32} />
              <Stack spacing={-1} align={'center'}>
                <Text fontSize={24} fontWeight={800} maxW={190} fontFamily={'Poppins'} color={'#2F327D'} mb={4}>
                  Frontend
                </Text>
              </Stack>
            </Flex>
            <Flex
              width={'235px'}
              border={'1px solid #773FC680'}
              borderRadius={'20px'}
              align={'center'}
              mt={8}
              direction={'column'}
            >
              <Avatar p={2} src='Images/Entertainment-1.png' alt='name' mb={4} width={130} height={32} />
              <Stack spacing={-1} align={'center'}>
                <Text fontSize={24} fontWeight={800} maxW={190} color={'#2F327D'} mb={4} fontFamily={'Poppins'}>
                  Professors
                </Text>
              </Stack>
            </Flex>
            <Flex
              width={'235px'}
              border={'1px solid #773FC680'}
              borderRadius={'20px'}
              align={'center'}
              mt={8}
              direction={'column'}
            >
              <Avatar p={2} src='Images/Law-&-Order-1.png' alt='name' mb={4} width={130} height={32} />
              <Stack spacing={-1} align={'center'}>
                <Text fontSize={24} fontWeight={800} maxW={190} color={'#2F327D'} mb={4} fontFamily={'Ubuntu'}>
                  Mentors
                </Text>
              </Stack>
            </Flex>
            <Flex
              width={'235px'}
              border={'1px solid #773FC680'}
              borderRadius={'20px'}
              align={'center'}
              mt={8}
              direction={'column'}
            >
              <Avatar p={2} src='Images/110.png' alt='name' mb={4} width={130} height={32} />
              <Stack spacing={-1} align={'center'}>
                <Text fontSize={24} fontWeight={800} maxW={190} color={'#2F327D'} mb={4} fontFamily={'Poppins'}>
                  Consultants
                </Text>
              </Stack>
            </Flex>
          </Flex>
        </Container>
        <Center mt={20}>
          <Button
            _hover={{
              color: 'white',
              backgroundColor: '#2F327D',
            }}
            fontSize={24}
            color={'#773FC6'}
            border={'1px solid #773FC6'}
            borderRadius={'3xl'}
            height={'48px'}
            width={'250px'}
            fontFamily={'Nunito Sans'}
          >
            Explore all
          </Button>
        </Center>
        <Container maxW={'7xl'} mt={20} position={'relative'} borderRadius={'md'}>
          <Center>
            <Heading
              align={'center'}
              width={'700px'}
              lineHeight={'56px'}
              fontSize={44}
              color={'#2F327D'}
              fontFamily={'Inter'}
            >
              Creating impact for retired and working professionals
            </Heading>
          </Center>
          <Stack spacing={8} mt={20} direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1} justify={'center'}>
              <Stack background={'#EDF3FF'} maxW={'400px'} spacing={5} w={'100%'}>
                <Heading borderTopRadius={'20px'} height={20} align={'center'} background={'#773FC6'}>
                  {' '}
                  <Text fontSize={44} justifyContent={'center'} color={'#fff'} mt={3} fontFamily={'Inter'}>
                    Why RetPro?
                  </Text>{' '}
                </Heading>
                <Text color={'#773FC6'}>
                  <UnorderedList ml={10} fontSize={24} spacing={6} fontFamily={'Inter'}>
                    <ListItem>work from the comfort of your home</ListItem>
                    <ListItem>offer virtual/in-person mentoring & guidance</ListItem>
                    <ListItem> connect & socialize with other RetPros & JunPros </ListItem>
                    <ListItem>enjoy superior quality of life post retirement</ListItem>
                  </UnorderedList>
                </Text>
              </Stack>
            </Flex>
            <Flex flex={1} justify={'center'}>
              <Stack background={'#EFFFE7'} maxW={'400px'} height={'450px'} spacing={5} w={'100%'}>
                <Heading borderTopRadius={'20px'} height={20} align={'center'} background={'#46B40F'}>
                  {' '}
                  <Text justifyContent={'center'} color={'#fff'} mt={3} fontSize={44} fontFamily={'Inter'}>
                    Why JunPro?
                  </Text>{' '}
                </Heading>
                <Text color={'#773FC6'}>
                  <UnorderedList ml={10} fontSize={24} spacing={2} fontFamily={'Inter'}>
                    <ListItem>work from the comfort of your homehire retired experts short or long-term</ListItem>
                    <ListItem>receive top notch mentorship & wisdom</ListItem>
                    <ListItem>pocket-friendly services that work for you</ListItem>
                    <ListItem>network & engage with RetPros</ListItem>
                  </UnorderedList>
                </Text>
              </Stack>
            </Flex>
          </Stack>
        </Container>
        <div>
          <Container overflow={'hidden'} maxW={'7xl'} position={'relative'} mt={20}>
            <Flex justifyContent={'space-between'} flex={1}>
              <Heading color={'#2F327D'} fontSize={{ base: '4xl', sm: '3xl', md: '6xl' }} fontFamily={'Inter'}>
                Some real-life success stories to get inspired by
              </Heading>
              <Flex gap={12}>
                <ArrowBackIcon
                  cursor={'pointer'}
                  color={'#2F327D'}
                  height={50}
                  width={30}
                  onClick={() => SlideRef.current.swiper.slideNext()}
                />
                <ArrowForwardIcon
                  cursor={'pointer'}
                  color={'#2F327D'}
                  height={50}
                  width={30}
                  onClick={() => SlideRef.current.swiper.slidePrev()}
                />
              </Flex>
            </Flex>
            <Swiper
              breakpoints={{
                576: {
                  // width: 576,
                  slidesPerView: 1,
                },
                768: {
                  // width: 768,
                  slidesPerView: 2,
                },
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={70}
              //   slidesPerView={window.innerWidth <= 550 ? 1 : window.innerWidth <= 720 ? 2 : 1}
              //   slidesPerView={2}
              //   slidesPerView={1}
              navigation={false}
              className={'mySwiper'}
              ref={SlideRef}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {StoriesSliderData.map((slider, indexs) => {
                return (
                  <SwiperSlide key={indexs}>
                    <Stack direction={{ base: 'row', md: 'row' }}>
                      <Flex flexWrap={'wrap'} pt={10} flex={1} justify={'start'}>
                        <Stack spacing={10} w={'90%'}>
                          <Heading lineHeight={'40px'} align={'start'}>
                            {' '}
                            <Heading
                              fontFamily={'Inter'}
                              fontWeight={500}
                              justifyContent={'center'}
                              color={'#2F327D'}
                              fontSize={'35px'}
                              mt={5}
                            >
                              " {slider.HeadFont}"
                            </Heading>{' '}
                          </Heading>
                          <Text fontFamily={'Roboto'} fontSize={24}>
                            "A RetPro helped me realize that my aspirations were leaning more towards Data sciences than
                            what I am currently doing"
                          </Text>
                          <Flex flexWrap={'wrap'} align={'center'} mr={8} direction={'row'}>
                            <Avatar width={'60px'} height={'60px'} spacing={20} src={slider.UserDp} alt='name' m={5} />
                            <Stack align={'center'}>
                              <Text fontFamily={'Inter'} fontSize={24} color={'#2F327D'} fontWeight={1000}>
                                Milena Belmar
                              </Text>
                              <Text fontSize={18} mt={'-10px'} color={'#606176'}>
                                Argentina
                              </Text>
                            </Stack>
                          </Flex>
                        </Stack>
                      </Flex>
                    </Stack>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>
        </div>
      </Stack>
    </div>
  );
};

export default React.memo(Home);
