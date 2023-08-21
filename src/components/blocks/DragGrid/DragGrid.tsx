import React, { useState } from "react";
import styles from "./DragGrid.module.scss";

const DragGrid: React.FC = () => {
    const [startX, setStartX] = useState<number>(0);
    const [startWidth, setStartWidth] = useState<number>(0);

    const handleMouseDown = (e: React.MouseEvent, columnId: string) => {
        setStartX(e.clientX);
        setStartWidth(
            parseInt(getComputedStyle(document.getElementById(columnId)).width, 10)
        );
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const widthDiff = e.clientX - startX;
        const column1 = document.getElementById("column1");
        const column2 = document.getElementById("column2");
        if (column1 && column2) {
            column1.style.width = startWidth + widthDiff + "px";
            column2.style.width = `calc(100% - ${startWidth + widthDiff}px)`;
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    return (
        <div className={styles.GridContainer}>
            <div
                className={styles.Column}
                id="column1"
                onMouseDown={(e) => handleMouseDown(e, "column1")}
            >
                Column 1
            </div>
            <div
                className={styles.Column}
                id="column2"
                onMouseDown={(e) => handleMouseDown(e, "column2")}
            >
                Column 2
            </div>
        </div>
    );
};

export default DragGrid;
