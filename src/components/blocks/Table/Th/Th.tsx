import styles from "./Th.module.scss";
import { Fragment, ReactNode } from "react";

interface ThProps {
    children: ReactNode,
    color?: string;
    type?: string;
    text_align?: string;
    onClick?: () => void;
    size?: string;
    numOfRows?: number | string;
    numOfCols?: number | string;
}

const Th: React.FC<ThProps> = ({
    children,
    color = "primary",
    type = "outline",
    text_align = "center",
    onClick,
    numOfRows = '',
    numOfCols = '',
}) => {
    const thClass = `${styles[`Th_${color}_${type}_${text_align}`]}`;

    return (
        <Fragment>
            <th className={thClass} onClick={onClick} style={{}} rowSpan={numOfRows} colSpan={numOfCols}>
                {children}
            </th>
        </Fragment>
    );
};

export default Th;
