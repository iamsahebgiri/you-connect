import { HiCheck, HiMinusSm } from "react-icons/hi";

export default function CheckboxIcon(props) {
    const { isIndeterminate, isChecked, ...rest } = props;

    if (isIndeterminate) {
        return <HiMinusSm />;
    } else {
        return <HiCheck />;
    }
}
