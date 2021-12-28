import { Box, Flex, propNames } from "@chakra-ui/react";
import { MenuApp } from "~/app/components/Menu";

export default function Layout ({...props}) {
    return (
        <Flex height='100vh'>
            <Box bg='gray' w='15%'>
                <MenuApp />
            </Box>
            <Box bg='#3C3F41' w='full'>
                {props.children}
            </Box>
        </Flex>
    )
}