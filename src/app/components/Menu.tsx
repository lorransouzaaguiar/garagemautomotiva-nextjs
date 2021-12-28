import { Box, List, ListItem, Text } from "@chakra-ui/react";
import Link from 'next/link'

export function MenuApp() {

    const MakeMenuItem = ({ ...props }): JSX.Element => {
        return (
            <ListItem
                minW='155px'
                minH='25px'
                p='5px 0 5px 12px'
                borderRadius='5px'
                _hover={{
                    bg: '#333FFF'
                }}
            >{props.text}</ListItem>
        )
    }

    return (
        <Box w="75%">
            <Text mb='20px' fontSize='1.125em' color='#7D858A'>Menu</Text>
            <List spacing="10px" color='white' fontSize='0.875em'>

                <Link href=''>
                    <MakeMenuItem text="Dashboard" />
                </Link>
                <Link href='/CustomerManage'>
                    <MakeMenuItem text="Cliente" />
                </Link>
                <MakeMenuItem text="Agendamento" />
               
                <MakeMenuItem text="Serviço" />
                <MakeMenuItem text="Produto" />
                <MakeMenuItem text="Caixa" />
            </List>
        </Box>
    )
}

