
import { Box, Button, Flex, HStack, Input, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

type ManageProps<T> = {
    headerInfo: {
        title: string,
        subTitle: string,
        inputPlaceholder: string
    },
    tableInfo: {
        nameColumns: string[],
        data: T[]
    }
} 

export function Manage<T extends {id?: number}>(props: ManageProps<T>) {
    const {headerInfo, tableInfo} = props

    return (
        <>
          <Flex
            borderBottom="1px solid gray"
            p='10px 30px'
            justify="space-between"
            alignItems="center">
            <Box>
                <Text 
                    as='h1' 
                    color="white" 
                    fontWeight="bold" 
                    fontSize="1.25em"
                     textTransform='uppercase'
                    >{headerInfo.title}</Text>
                <Text 
                    as="h3" 
                    fontSize="0.875em"  textTransform='uppercase' fontWeight='bold'>{headerInfo.subTitle}</Text>
            </Box>
            <HStack spacing="10px">
                <Input placeholder={headerInfo.inputPlaceholder} minW="190px" minH="33px" />
                <Button
                    bg="#333FFF"
                    color='white'
                    minW="80px"
                    minH='33px'
                    fontSize="0.875em"
                >Pesquisar</Button>
            </HStack>
            <Button
                bg="#333FFF"
                color='white'
                minW="80px"
                minH='33px'
                fontSize="0.875em">Novo</Button>
        </Flex>
        
        <Box p='10px 30px'>
            <Table variant='unstyled'
                sx={{
                    'tr td': {
                        p: '10px 0px',
                        color: '#7D858A'
                    },
                    'tr th': {
                        p: '10px 0px',
                        color: '#7D858A'
                    }
                }}>
                <Thead >
                    <Tr>
                        {tableInfo?.nameColumns.map((column, index) => {
                            return (<Th key={index}>{column}</Th>)
                        })}
                        <Th>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableInfo?.data.map(item => {
                       
                        return (
                            <Tr key={item.id}>
                                { 
                                    console.log(Object.entries(item))
                                /*Object.entries(item).map((value, index) => {
                                    if(value[0] !== 'id')
                                        return (<Td key={index}>{value[1]}</Td>)
                                    return null
                                })*/}
                                <Td>
                                    <Button borderRadius='50px' w='45px' bg='red' color='white'>R</Button>
                                    <Button borderRadius='50px' w='45px'>E</Button>
                                </Td>
                            </Tr>
                        )
                    })}

                </Tbody>
            </Table>
        </Box>
        </>
    )
}