import { Box, List, ListItem, Text } from "@chakra-ui/react";
import Link from 'next/link'
import React, { LegacyRef } from "react";

export function MenuApp() {

    const MakeMenuItem = React.forwardRef(
        ({ onClick, text}: any, ref: LegacyRef<HTMLLIElement>)  => {
        
            return (
            <ListItem
                onClick={onClick}
                ref={ref}
                minW='155px'
                minH='25px'
                p='5px 0 5px 12px'
                borderRadius='5px'
                _hover={{
                    bg: '#333FFF'
                }}
            >{text}</ListItem>
        )
    })

    return (
        <Box w="75%">
            <Text mb='20px' fontSize='1.125em' color='#7D858A'>Menu</Text>

            <List spacing="10px" color='white' fontSize='0.875em'>
                <Link href='/view/dashboard' passHref>
                    <MakeMenuItem text="Dashboard" />
                </Link>

                <Link href='/view/customer' passHref>
                    <MakeMenuItem text="Cliente" />
                </Link>

                <Link href='/view/scheduling' passHref>
                    <MakeMenuItem text="Agendamento" />
                </Link>

                <Link href='/view/service' passHref>
                    <MakeMenuItem text="Servico" />
                </Link>

                <Link href='/view/product' passHref>
                    <MakeMenuItem text="Produto" />
                </Link>

                <Link href='/view/sell' passHref>
                    <MakeMenuItem text="Caixa" />
                </Link>
            </List>
        </Box>
    )
}

