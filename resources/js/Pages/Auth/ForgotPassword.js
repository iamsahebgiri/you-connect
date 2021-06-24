import Guest from "@/Layouts/Guest";
import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
} from "@chakra-ui/react";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Guest>
            <Text mb="4" fontSize="sm" color="gray.500" lineHeight="tall">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </Text>

            {status && (
                <Text mb="4" fontWeight="medium" fontSize="sm" color="gray.600">
                    {status}
                </Text>
            )}

            <form onSubmit={submit}>
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

                <Flex mt="6" w="full" justify="flex-end" align="center">
                    <Button ml="4" type="submit" isLoading={processing}>
                        Email Password Reset Link
                    </Button>
                </Flex>
            </form>
        </Guest>
    );
}
