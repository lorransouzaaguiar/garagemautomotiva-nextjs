
import { Box, Button, Flex, HStack, Input, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

type ManageProps<T> = {
    children: React.ReactNode
    headerInfo: {
        title: string,
        subTitle: string,
        inputPlaceholder: string
    },
    tableInfo: {
        columnNames: string[]
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
            <Box w='250px'>
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
                <Button size='md' variant='solid'>Pesquisar</Button>
            </HStack>
            <Button size='md' variant='solid'>Novo</Button>
        </Flex>
        
        <Box p='10px 30px'>
            <Table variant='unstyled' 
                sx={{
                    'tr td': {
                        p: '10px 0px',
                        color: 'secondary'
                    },
                    'tr th': {
                        p: '10px 0px',
                        color: 'secondary'
                    }
                }}>
                <Thead >
                    <Tr>
                        {tableInfo?.columnNames.map((column, index) => {
                            return (<Th key={index}>{column}</Th>)
                        })}
                        <Th w='8%'>Ações</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.children}
                </Tbody>
            </Table>
        </Box>
        </>
    )
}