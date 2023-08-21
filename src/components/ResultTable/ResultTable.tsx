import { ResultTableLabels, ResultTableLabelsRows } from '../../utils/constants';
import styles from '../blocks/Table/Table.module.scss';
import { useState, useEffect } from 'react';
import Td from '../blocks/Table/Td/Td';
import Th from './../blocks/Table/Th/Th';
import { BsFillTrash2Fill } from 'react-icons/bs';

interface ResultRow {
    order_num: string;
    well_num: string;
    profile: string;
    date: string;
    D_col: string;
    operation_object: string;
    hard: string;
    partial: string;
    absent: string;
    homogeneous: string;
    unilateral: string;
    contact_quality_factor: string;
    filling_quality_factor: string;
    cementing_quality: string;
}

const ResultTable: React.FC = () => {
    const resultData: ResultRow[] = [{
        order_num: 'loading',
        well_num: 'loading',
        profile: 'loading',
        date: 'loading',
        D_col: 'loading',
        operation_object: 'loading',
        hard: 'loading',
        partial: 'loading',
        absent: 'loading',
        homogeneous: 'loading',
        unilateral: 'loading',
        contact_quality_factor: 'loading',
        filling_quality_factor: 'loading',
        cementing_quality: 'loading',
    }];

    const numOfRow = Array.from(Object.keys(ResultTableLabelsRows));

    const [rows, setRows] = useState<ResultRow[]>(resultData);

    const getInitialResultData = async () => {
        const url = 'http://localhost:3000/actions';
        const response = await fetch(url);
        const data: ResultRow[] = await response.json();
        const modifiedData = data.map((item) => ({
            ...item,
            action: 'delete',
        }));
        setRows(modifiedData);
    };

    useEffect(() => {
        getInitialResultData();
    }, []);

    return (
        <div>
            <table id="customers" style={{ borderCollapse: 'collapse', scale: '0.78', marginLeft: '-9.8rem' }}>
                <thead>
                    {numOfRow.map((el) => (
                        <tr style={{ lineHeight: '3rem' }} key={el}>
                            {Object.keys(ResultTableLabelsRows[el]).map((label) => (
                                <Th
                                    key={label}
                                    numOfRows={ResultTableLabelsRows[el][label]?.rowspan}
                                    numOfCols={ResultTableLabelsRows[el][label]?.colspan}
                                    children={ResultTableLabels[label]}
                                    size={'small'}
                                />
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr style={{ lineHeight: '2rem' }} key={rowIndex}>
                            {Object.values(row).map((cell, cellIndex) => (
                                <Td
                                    key={cellIndex}
                                    onClick={() => console.log('click')}
                                >
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
        </div>
    );
};

export default ResultTable;
