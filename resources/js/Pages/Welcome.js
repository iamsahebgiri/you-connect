import { Box, Heading, Text } from "@chakra-ui/react";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Welcome() {
    return (
        <Box>
            <Heading>YouConnect</Heading>
            <InertiaLink href={route("login")}>
                <Text color="blue.700" mt="4">Login</Text>
            </InertiaLink>
            <InertiaLink href={route("register")}>
                <Text color="blue.700" mt="4">Register</Text>
            </InertiaLink>
        </Box>
    );
}
