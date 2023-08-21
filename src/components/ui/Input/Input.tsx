import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    inputValue: string;
    action: (value: string) => void;
    color?: string;
    type?: string;
    shape?: string;
    size?: string;
    inputType?: string;
    placeholder?: string;
    width?: string;
    maxLength?: string;
    margin?: string;
}

const Input: React.FC<InputProps> = ({
    inputValue,
    action,
    color = "primary",
    type = "outline",
    shape = "rounded",
    size = "medium",
    inputType = "text",
    placeholder = "Input",
    width = "100%",
    maxLength = "5",
    margin = "0"
}) => {
    const inputStyle = {
        width: width,
        margin: margin,
    };
    const inputClass = `${styles.Input} ${styles[`Input_${color}_${type}_${shape}_${size}`]}`;

    return (
        <React.Fragment>
            <input
                value={inputValue}
                className={inputClass}
                type={inputType}
                placeholder={placeholder}
                style={inputStyle}
                onChange={(event) => {
                    const inputValue = event.target.value;
                    action(inputValue);
                }}
            />
        </React.Fragment>
    );
};

export default Input;
