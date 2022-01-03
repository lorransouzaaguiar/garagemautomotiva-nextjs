import { Box, Flex, propNames } from "@chakra-ui/react";
import { MenuApp } from "~/app/components/Menu";

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout ({children}: LayoutProps) {
    return (
        <Flex height='100vh'>
            <Box bg='gray' w='15%'>
                <MenuApp />
            </Box>
            <Box bg='#3C3F41' w='full'>
                {children}
            </Box>
        </Flex>
    )
}