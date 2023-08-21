import styles from './Td.module.scss';
import { React, Fragment, ReactNode } from 'react';

interface TdProps {
    children: ReactNode;
    color?: string;
    type?: string;
    text_align?: string;
    onClick?: () => void;
    size?: string;
    numOfRows?: number | string;
    numOfCols?: number | string;
}

const Td: React.FC<TdProps> = ({
    children,
    color = 'info',
    type = 'text',
    text_align = 'center',
    onClick,
    size = 'medium',
    numOfRows = '',
    numOfCols = '',
}) => {
    const thClass = `${styles[`Td_${color}_${type}_${text_align}_${size}`]}`;

    return (
        <Fragment>
            <td className={thClass} onClick={onClick} style={{}} rowSpan={numOfRows} colSpan={numOfCols}>
                {children}
            </td>
        </Fragment>
    );
};

export default Td;
