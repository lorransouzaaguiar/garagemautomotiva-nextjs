import { Box, Flex, propNames } from "@chakra-ui/react";
import { MenuApp } from "~/app/components/Menu";

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout ({children}: LayoutProps) {
    return (
        <Flex height='100vh'>
            <Box bg='secondary' w='15%'>
                <MenuApp />
            </Box>
            <Box bg='primary' w='full'>
                {children}
            </Box>
        </Flex>
    )
}