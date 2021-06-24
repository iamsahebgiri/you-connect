import ApplicationLogo from "../Components/ApplicationLogo";
import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Box, Flex } from "@chakra-ui/react";

export default function Guest({ children }) {
    return (
        <Flex
            minH="100vh"
            flexDir="column"
            align="center"
            justify={{ sm: "center" }}
            pt={["0", "6"]}
            bg="gray.100"
        >
            <Box>
                <InertiaLink href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </InertiaLink>
            </Box>

            <Box
                w="full"
                maxW={["md"]}
                mt="6"
                px="6"
                py="4"
                bg="white"
                shadow="md"
                rounded={["lg"]}
            >
                {children}
            </Box>
        </Flex>
    );
}
