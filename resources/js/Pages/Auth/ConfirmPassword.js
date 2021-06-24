import Guest from "@/Layouts/Guest";
import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <Guest>
            <Text mb="4" fontSize="sm" color="gray.600" lineHeight="tall">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </Text>

            <form onSubmit={submit}>
                <VStack spacing="4">
                    <FormControl id="password" isInvalid={errors.password}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={onHandleChange}
                        />
                        {errors.password && (
                            <FormErrorMessage>
                                {errors.password}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                </VStack>
                <Flex mt="6" w="full" justify="flex-end" align="center">
                    <Button ml="4" type="submit" isLoading={processing}>
                        Register
                    </Button>
                </Flex>
            </form>
        </Guest>
    );
}
