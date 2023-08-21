import styles from './Table.module.scss';
import { useState, useEffect } from 'react';
import Th from './Th/Th';
import Td from './Td/Td';
import { BsFillTrash2Fill } from 'react-icons/bs';

interface TableProps {
    tableLabels: Record<string, string>;
}

const Table: React.FC<TableProps> = ({ tableLabels }) => {
    const data = [
        {
            id: '--',
            type: 'loading',
            amount: 'loading',
            currency: 'loading',
            sphere: 'loading',
            category: 'loading',
            datetime: 'loading',
            user: 'loading',
            shop: 'loading',
            action: 'loading',
        },
    ];

    const [rows, setRows] = useState(data);

    const getInitialData = async () => {
        try {
            const url = 'http://localhost:3000/actions';
            const response = await fetch(url);
            const data = await response.json();
            const modifiedData = data.map((item) => ({
                ...item,
                action: 'delete',
            }));
            setRows(modifiedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getInitialData();
    }, []);

    return (
        <table id="customers" style={{ borderCollapse: 'collapse' }}>
            <thead>
                <tr style={{ lineHeight: '60px' }}>
                    {Object.keys(rows[0]).map((col, index) => (
                        <Th key={index} onClick={() => console.log('click')}>
                            {tableLabels[col]}
                        </Th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr style={{ lineHeight: '1.5rem' }} key={rowIndex}>
                        {Object.values(row).map((cell, cellIndex) => (
                            <Td key={cellIndex} onClick={() => console.log('click')}>
                                {cell === 'delete' ? (
                                    <BsFillTrash2Fill className={styles.Svg} />
                                ) : (
                                    cell
                                )}
                            </Td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
