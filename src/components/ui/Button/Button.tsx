import React, { ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    children: ReactNode;
    color?: string;
    type?: string;
    shape?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    width?: string;
    height?: string;
    margin?: string;
    size?: string;
    withIcon?: boolean;
    icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    children,
    color = 'primary',
    type,
    shape,
    onClick,
    width = '100%',
    height = '100%',
    margin = '0',
    size = 'medium',
    withIcon = false,
    icon = null,
}) => {
    // Form class names based on the props and styles
    const inputStyle = {
        width: width,
        margin: margin,
        height: height,
    };
    const buttonClass = `${styles.Button} ${styles[`Button_${color}_${type}_${shape}_${size}`]}`;

    return (
        <button className={buttonClass} onClick={onClick} style={inputStyle}>
            {withIcon && icon}
            {children}
        </button>
    );
};

export default Button;
