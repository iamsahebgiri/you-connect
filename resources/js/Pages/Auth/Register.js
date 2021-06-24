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
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Guest>
            <form onSubmit={submit}>
                <VStack spacing="4">
                    <FormControl id="email" isInvalid={errors.name}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={onHandleChange}
                            autoComplete="name"
                            autoFocus
                            required
                        />
                        {errors.name && (
                            <FormErrorMessage>{errors.name}</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl id="email" isInvalid={errors.email}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={onHandleChange}
                            autoComplete="username"
                            autoFocus
                        />
                        {errors.email && (
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl id="password" isInvalid={errors.password}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={onHandleChange}
                            autoComplete="new-password"
                        />
                        {errors.password && (
                            <FormErrorMessage>
                                {errors.password}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        id="password_confirmation"
                        isInvalid={errors.password_confirmation}
                    >
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={onHandleChange}
                        />
                        {errors.password_confirmation && (
                            <FormErrorMessage>
                                {errors.password_confirmation}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                </VStack>

                <Flex mt="6" w="full" justify="flex-end" align="center">
                    <InertiaLink href={route("login")}>
                        <Text color="blue.700">Already registered?</Text>
                    </InertiaLink>
                    <Button ml="4" type="submit" isLoading={processing}>
                        Register
                    </Button>
                </Flex>
            </form>
        </Guest>
    );
}
