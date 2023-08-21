import React, { useEffect, useState } from "react";
import IconComponent from "../../ui/Icon/IconEnum";
import SidebarItem from "../../ui/SidebarItem/SidebarItem";

interface SideBarProps {
    className?: string;
    initialItemList: string[];
}

const SideBar: React.FC<SideBarProps> = ({ className, initialItemList }) => {
    const [parentWidth, setParentWidth] = useState(230);
    const [itemList, setItemList] = useState(initialItemList);

    useEffect(() => {
        const handleResize = () => {
            const containerWidth = document.getElementById("sidebar")?.offsetWidth || 0;
            setParentWidth(containerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav id="sidebar" className={className}>
            {itemList.map((sideBarItem, index) => (
                <SidebarItem
                    key={index}
                    onClick={() => console.log("click")}
                    lable={sideBarItem}
                    display={parentWidth < 230 ? "none" : "true"}
                >
                    <IconComponent label={sideBarItem} />
                </SidebarItem>
            ))}
        </nav>
    );
};

export default SideBar;
