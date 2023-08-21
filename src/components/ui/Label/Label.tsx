import React from "react";
import styles from "./Label.module.scss";

interface LabelProps {
    children: React.ReactNode;
    color?: string;
    display?: string;
}

const Label: React.FC<LabelProps> = ({ children, color = "primary", display = "true" }) => {
    const labelClass = `${styles.Label} ${styles[`Label_${color}_${display}`]}`;
    return <p className={labelClass}>{children}</p>;
};

export default Label;
