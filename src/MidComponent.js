import { Heading, HStack, Text,Box,Card, CardBody,GridItem,IconButton,Button, Grid, Center, Stack, Divider,Switch,Badge,useColorMode } from '@chakra-ui/react'
import {React,useEffect,useState} from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb
  } from '@chakra-ui/react'
  import { CheckIcon } from '@chakra-ui/icons'
  import {BiMoveHorizontal} from "react-icons/bi"
  import {FaSun,FaMoon} from "react-icons/fa"

export default function MidComponent() {
    
    const [pageViews, setPageViews] = useState("0")
    const [price, setPrice] = useState(8)
    const [numericPageviews, setNumericPageviews] = useState(0)
    const [isChecked,setIsChecked] = useState(false)
    const [pricesMat] = useState({
        "0":0,
        "10K":8,
        "50K":12,
        "100K":16,
        "500K":24,
        "1M":36
        
    })
    
    useEffect(()=>{
        if(isChecked){
            setPrice(0.75 * pricesMat[pageViews])
        }
        else{
            setPrice(pricesMat[pageViews])
        }
},[isChecked,pageViews,pricesMat])
    const handleChange = (e)=>{
        
    // - 10K pageviews / $8 per month
    // - 50K pageviews / $12 per month
    // - 100K pageviews / $16 per month
    // - 500k pageviews / $24 per month
    // - 1M pageviews / $36 per month
        setNumericPageviews(e)
        if(e<=25){
            setPageViews("10K")
            setPrice(8)
        }
        else if (e<=50){
            setPageViews("50K")
            setPrice(12)
        }
        else if (e<=75){
            setPageViews("100K")
            setPrice(16)
        }
        else if (e<=100){
            setPageViews("500K")
            setPrice(24)
        }
        else if (e<=125){
            setPageViews("1M")
            setPrice(36)
        }
    }
    const handleToggle = (e)=>{
        setIsChecked(e.target.checked)
       
    }
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <>

        <Center >

        <Grid templateColumns='repeat(1,1fr)' templateRows={'1fr 3fr'} >
        <GridItem rowSpan={1}>
        <Heading mb={3} mt={5} textAlign={"center"}>Simple, traffic based pricing</Heading>
        <Text color="hsl(225, 20%, 60%)" textAlign={"center"}>Sign up for our 30-day trial. No credit card required.</Text>
        </GridItem>

        <GridItem rowSpan={3}>

                <Card className="card" bg={colorMode === "dark" ? 'black':'white'} p={5} w={["100%","90%",800]} m={[0,3,5]}>
                <CardBody>
            <Stack >
                <Box>
                <HStack gap={5} mb={7} justifyContent="space-between">
                    <Text color={"hsl(225, 20%, 60%)"}>{pageViews} PAGEVIEWS</Text>
                    <Box><Heading as='b'>${price}</Heading><Text color={"hsl(225, 20%, 60%)"}>per month</Text></Box>
                </HStack>
                </Box>
                <Box>
                <Slider   min={0} max={125} step={25} value={numericPageviews} onChange={handleChange}>
                <SliderTrack bg='hsl(0, 0%, 90%)'>
                    <Box position='relative' right={10} />
                    <SliderFilledTrack bg='hsl(174, 77%, 80%)' />
                </SliderTrack>
                
                <SliderThumb boxSize={8}>
                    <Box size={25} color='hsl(174, 86%, 45%)' as={BiMoveHorizontal}/>
                </SliderThumb> 
                </Slider>
                </Box>
                <Box >
                <HStack justifyContent="end" p={3} mt={5}>
                <Text color="hsl(225, 20%, 60%)">Monthly Billing</Text>
                <Switch isChecked={isChecked} onChange={handleToggle} colorScheme='cyan' size='lg' />
                <Text color="hsl(225, 20%, 60%)">Yearly Billing</Text>
                <Badge variant='subtle' colorScheme='orange'>
                    25% discount
                </Badge>
                </HStack>
                </Box>
                <Divider/>
                <Box >
                    <Grid mt={5} templateColumns={"repeat(2,1fr)"} >
                    <GridItem p={3} justifySelf="start">
                    <Box>
                    <CheckIcon color='hsl(160, 100%, 40%)'/> Unlimited Websites <br/>
                        
                    </Box>
                    <Box mt={1} mb={1}>
                    <CheckIcon  color='hsl(160, 100%, 40%)'/> 100% data ownership <br/>

                    </Box>
                    <Box>
                    <CheckIcon color='hsl(160, 100%, 40%)'/> Email Reports <br/>

                    </Box>

                    </GridItem>
                    <GridItem justifySelf="end">
                    <br/>
                    <Button borderRadius={'full'} p={5} color={colorMode === "dark" ? 'hsl(207, 100%, 50%)' : 'hsl(226, 100%, 87%)'} colorScheme={colorMode==="dark"?"whiteAlpha": "blue"}>   <Text m={5}>Start My Trial</Text>  </Button>
                    <br/>
                    </GridItem>
                    </Grid>
                </Box>
            </Stack>

                </CardBody>
                </Card>
        </GridItem>
        </Grid>
        </Center>
        <IconButton
        aria-label="toggle theme"
        rounded="full"
        size="lg"
        position="absolute"
        top={4}
        right={4}
        onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      />
        </>
       
    )
}
