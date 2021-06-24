const sizes = {
    sm: {
        control: { h: 3, w: 3 },
        label: { fontSize: "sm" },
        icon: { fontSize: "0.45rem" },
    },
    md: {
        control: { w: 4, h: 4 },
        label: { fontSize: "sm" },
        icon: { fontSize: "0.625rem" },
    },
    lg: {
        control: { w: 5, h: 5 },
        label: { fontSize: "lg" },
        icon: { fontSize: "0.625rem" },
    },
};

const Checkbox = {
    baseStyle: {
        control: {
            border: "1px solid",
            borderRadius: "0.26rem",
            shadow: "sm",
        },
    },
    sizes,
};

export default Checkbox;
