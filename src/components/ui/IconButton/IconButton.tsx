import React from "react";
import styles from "./IconButton.module.scss";

interface IconButtonProps {
    children: React.ReactNode;
    color?: string;
    type?: string;
    shape?: string;
    size?: string;
    onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
    children,
    color = "primary",
    type = "text",
    shape = "rounded",
    size = "medium",
    onClick
}) => {
    const buttonClass = `${styles.Button} ${styles[`IconButton_${color}_${type}_${shape}_${size}`]
        }`;

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default IconButton;
