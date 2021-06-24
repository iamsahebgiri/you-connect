import Guest from "@/Layouts/Guest";
import { Button, Flex, Text } from "@chakra-ui/react";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm();

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <Guest>
            <Text mb="4" fontSize="sm" color="gray.600" lineHeight="tall">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </Text>

            {status === "verification-link-sent" && (
                <Text
                    mb="4"
                    fontWeight="medium"
                    fontSize="sm"
                    color="green.600"
                >
                    A new verification link has been sent to the email address
                    you provided during registration.
                </Text>
            )}

            <form onSubmit={submit}>
                <Flex mt="4" w="full" justify="space-between" align="center">
                    <Button type="submit" isLoading={processing}>
                        Resend Verification Email
                    </Button>
                    <InertiaLink
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        <Text
                            color="blue.600"
                            fontSize="sm"
                            _hover={{ color: "blue.800" }}
                        >
                            Log Out
                        </Text>
                    </InertiaLink>
                </Flex>
            </form>
        </Guest>
    );
}
