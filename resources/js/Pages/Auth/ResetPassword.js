import Guest from "@/Layouts/Guest";
import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    VStack,
} from "@chakra-ui/react";
import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.update"));
    };

    return (
        <Guest>
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
                    <Button ml="4" type="submit" isLoading={processing}>
                        Reset Password
                    </Button>
                </Flex>
            </form>
        </Guest>
    );
}
