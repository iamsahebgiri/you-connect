import { mode, transparentize } from "@chakra-ui/theme-tools";

const sizes = {
    lg: {
        h: 12,
        minW: 12,
        fontSize: "lg",
        px: 6,
    },
    md: {
        h: 9,
        minW: 10,
        fontSize: "xs",
        px: 4,
    },
    sm: {
        h: 8,
        minW: 8,
        fontSize: "sm",
        px: 3,
    },
    xs: {
        h: 6,
        minW: 6,
        fontSize: "xs",
        px: 2,
    },
};

const Button = {
    variants: {
        dark: (props) => ({
            letterSpacing: "wider",
            textTransform: "uppercase",
            color: mode(
                `${props.colorScheme}.50`,
                `${props.colorScheme}.200`
            )(props),
            bg: "gray.800",
            _hover: {
                bg: mode(`${props.colorScheme}.700`, transparentize(`${props.colorScheme}.200`, 0.24)(props.theme))(props),
            },
            _active: {
                bg: mode(`${props.colorScheme}.900`, transparentize(`${props.colorScheme}.200`, 0.12)(props.theme))(props),
                outline: "none"
            },
        }),
    },
    sizes,
    defaultProps: {
        variant: "dark",
    },
};

export default Button;
