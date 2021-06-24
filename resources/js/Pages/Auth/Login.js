import React, { useEffect } from "react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import Guest from "@/Layouts/Guest";
import CheckboxIcon from "@/Components/CheckboxIcon";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
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

        post(route("login"));
    };

    return (
        <Guest>
            {status && (
                <Text mb="4" fontWeight="medium" fontSize="sm" color="gray.600">
                    {status}
                </Text>
            )}

            <form onSubmit={submit}>
                <VStack spacing="4">
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
                            autoComplete="current-password"
                        />
                        {errors.password && (
                            <FormErrorMessage>
                                {errors.password}
                            </FormErrorMessage>
                        )}
                    </FormControl>

                    <Flex align="center" justify="space-between" w="full">
                        <Checkbox
                            name="remember"
                            colorScheme="indigo"
                            icon={<CheckboxIcon />}
                            value={data.remember}
                            onChange={onHandleChange}
                        >
                            Remember me
                        </Checkbox>
                        {canResetPassword && (
                            <InertiaLink href={route("password.request")}>
                                <Text color="blue.700">
                                    Forgot your password?
                                </Text>
                            </InertiaLink>
                        )}
                    </Flex>
                </VStack>

                <Flex mt="6" w="full" justify="flex-end">
                    <Button type="submit" w="full" isLoading={processing}>
                        Log in
                    </Button>
                </Flex>
            </form>
        </Guest>
    );
}
