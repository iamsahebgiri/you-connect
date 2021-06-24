require("./bootstrap");

import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import customTheme from './Theme';

const el = document.getElementById("app");

render(
    <ChakraProvider theme={customTheme}>
        <App
            initialPage={JSON.parse(el.dataset.page)}
            resolveComponent={(name) => require(`./Pages/${name}`).default}
        />
    </ChakraProvider>,
    el
);

InertiaProgress.init({ color: "#4B5563" });
