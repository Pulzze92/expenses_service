import React from "react";
import IconButton from "../IconButton/IconButton";
import styles from "./SidebarItem.module.scss";
import Box from "../Box/Box";
import Label from "../Label/Label";

interface SidebarItemProps {
    children: React.ReactNode;
    color?: string;
    type?: string;
    shape?: string;
    size?: string;
    display?: string;
    label?: string;
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    children,
    color = "primary",
    type = "text",
    shape = "rounded",
    size = "medium",
    display = "true",
    label = "label",
    onClick,
}) => {
    return (
        <Box place={display === "true" ? "row_sc" : "row_cc"}>
            <IconButton
                color={color}
                type={type}
                shape={shape}
                size={size}
                onClick={onClick}
            >
                {children}
            </IconButton>
            <Label color={color} display={display}>
                {label}
            </Label>
        </Box>
    );
};

export default SidebarItem;
