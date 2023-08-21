import React from "react";
import styles from "./Box.module.scss";

interface BoxProps {
    children: React.ReactNode;
    place?: string;
    height?: string;
    width?: string;
    py?: string;
    px?: string;
    backgroundColor?: string;
}

const Box: React.FC<BoxProps> = ({
    children,
    place = "row_sbc",
    height = "100%",
    width = "auto",
    py = "0",
    px = "0",
    backgroundColor = "inherit",
}) => {
    const sizeStyle = {
        height: height,
        width: width,
        padding: `${py}px ${px}px`,
        backgroundColor: backgroundColor,
    };

    const boxClass = `${styles[`Box_${place}`]}`;

    return (
        <div className={boxClass} style={sizeStyle}>
            {children}
        </div>
    );
};

export default Box;
