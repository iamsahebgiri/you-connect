import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            fontSize: "sm",
            color: mode("gray.900", "white")(props),
            bg: mode("gray.50", "gray.900")(props),
        },
    }),
};

export default styles;
