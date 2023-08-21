import React from "react";
import styles from "./Section.module.scss";

interface SectionProps {
    children: React.ReactNode;
    place: string;
}

const Section: React.FC<SectionProps> = ({ children, place }) => {
    const sectionClass = `${styles.Section} ${styles[`Section_${place}`]}`;
    return <div className={sectionClass}>{children}</div>;
};

export default Section;
