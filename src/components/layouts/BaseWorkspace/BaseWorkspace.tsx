import React, { useState } from "react";
import styles from "./BaseWorkspace.module.scss";
import AppBar from "../../blocks/AppBar/AppBar";
import SideBar from "../../blocks/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";

interface BaseWorkspaceProps {
    children: React.ReactNode;
    initialItemList: string[];
}

const WorkSpaceRouts: React.FC = () => {
    return (
        <Routes>
            <Route path="/1" element={<h2>first</h2>} />
            <Route path="/2" element={<h2>second</h2>} />
        </Routes>
    );
};

const BaseWorkspace: React.FC<BaseWorkspaceProps> = ({ children, initialItemList }) => {
    const [pageSideBarItems, setPageSideBarItems] = useState(initialItemList);

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <AppBar />
            </header>
            <SideBar
                className={styles.sidebar}
                initialItemList={pageSideBarItems}
            ></SideBar>

            <div className={styles.content}>{children}</div>
            <footer className={styles.footer}>footer</footer>
        </div>
    );
};

export default BaseWorkspace;
