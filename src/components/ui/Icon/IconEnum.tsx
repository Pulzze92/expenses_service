import React from "react";
import {
    BsFillTrash2Fill,
    BsFillBarChartFill,
    BsFillPeopleFill,
    BsFillPieChartFill,
    BsFillPersonFill,
} from "react-icons/bs";
import { LuArrowUpDown, LuBanknote } from "react-icons/lu";

const IconEnum = {
    Trash: BsFillTrash2Fill,
    BarChart: BsFillBarChartFill,
    Family: BsFillPeopleFill,
    PieChart: BsFillPieChartFill,
    Profile: BsFillPersonFill,
    Actions: LuArrowUpDown,
    Money: LuBanknote,
    // Add other mappings as needed
};

interface IconComponentProps {
    label: string;
    Enum?: { [key: string]: React.ElementType };
}

const IconComponent: React.FC<IconComponentProps> = ({ label, Enum = IconEnum }) => {
    const IconComponent = Enum[label] || null;
    if (IconComponent) {
        return <IconComponent />;
    } else {
        return <span>Unknown Icon</span>;
    }
};

export default IconComponent;
