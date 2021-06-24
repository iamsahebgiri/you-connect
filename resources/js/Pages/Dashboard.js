import Authenticated from "@/Layouts/Authenticated";
import Card from "@/Components/Card";
import { Box, Link, Flex, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const MobileHeaderLink = ({ name, href, isActive }) => {
    return (
        <Flex
            bgColor={isActive && "indigo.200"}
            color={isActive && "indigo.700"}
            fontWeight={isActive && "semibold"}
            px="4"
            py="2"
            rounded="md"
        >
            <Text>{name}</Text>
        </Flex>
    );
};

export default function Dashboard(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Box py="12">
                <Flex maxW="7xl" mx="auto" px={[6, 8]}>
                    <Box width="48">
                        <MobileHeaderLink href="home" name="Home" isActive />
                        <MobileHeaderLink href="home" name="Popular" />
                        <MobileHeaderLink href="home" name="Trending" />
                    </Box>
                    <Box width="2xl" px={[6, 8]}>
                        <VStack>
                            <Card w="full">Hello</Card>
                            <Card w="full">Hello</Card>
                            <Card w="full">Hello</Card>

                        </VStack>
                    </Box>
                </Flex>
            </Box>
        </Authenticated>
    );
}
