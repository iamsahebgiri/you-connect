import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

const InertiaLinkButton = React.forwardRef((props, ref) => (
    <InertiaLink
        as="button"
        method="POST"
        ref={ref}
        {...props}
    />
));

export default InertiaLinkButton;
