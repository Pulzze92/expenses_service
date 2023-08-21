import React, { useState } from 'react';
import { InputLabels, ButtonLabels } from '../../../utils/constants';
import Button from '../../ui/Button/Button';
import InputsRow from './../InputsRow/InputsRow';
import { ReactComponent as DeleteIcon } from '../../../assets/images/redCross.svg';
import { Link } from 'react-router-dom';

const InputList: React.FC = () => {
    const initialInputValues: Record<string, string> = {};

    Object.keys(InputLabels).forEach(label => {
        initialInputValues[label] = InputLabels[label];
    });

    const [inputValues, setInputValues] = useState<Record<string, string>[]>([initialInputValues]);
    const [clickCount, setClickCount] = useState<number>(1);

    const handleAddWellClick = () => {
        setClickCount(prevCount => prevCount + 1);
        setInputValues(prevInputValues => [
            ...prevInputValues,
            { ...initialInputValues }
        ]);
    };

    const handleInputChange = (label: string, value: string) => {
        setInputValues(prevInputValues => {
            const updatedValues = prevInputValues.map(inputs => ({
                ...inputs,
                [label]: value
            }));
            return updatedValues;
        });
    };

    const handleButtonClick = (buttonLabel: string) => {
        if (buttonLabel === ButtonLabels['add_well']) {
            handleAddWellClick();
        } else if (buttonLabel === ButtonLabels['count']) {

        }
    };

    return (
        <>
            {Array.from({ length: clickCount }).map((_, index) => (
                <InputsRow
                    placeholders={Object.values(InputLabels)}
                    action={value => handleInputChange(Object.keys(InputLabels)[index], value)}
                    key={index}
                />
            ))}
            {clickCount > 1 && (
                <Button
                    margin='1rem 1rem'
                    size='small'
                    width='3.8rem'
                    height='2.6rem'
                    withIcon={true}
                    icon={<DeleteIcon style={{ maxWidth: '2rem', maxHeight: '1.5rem' }}
                        onClick={() => {
                            setClickCount(prevCount => prevCount - 1);
                        }} />}
                />
            )}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: '3rem', flexWrap: 'wrap' }}>
                {Object.values(ButtonLabels).map((label) => (
                    label === ButtonLabels['count'] ? (
                        <div style={{ maxWidth: '13rem', maxHeight: '2.625rem', margin: '0 2rem 0 0' }} key={label}>
                            <Link to="/results">
                                <Button
                                    children={label}
                                    width='13rem'
                                    margin='1rem 1rem'
                                    size='small'
                                    onClick={() => {
                                        handleButtonClick(label);
                                    }} />
                            </Link>
                        </div>
                    ) : (
                        <Button
                            children={label}
                            width='13rem'
                            key={label}
                            margin='1rem 1rem'
                            size='small'
                            onClick={() => {
                                handleButtonClick(label);
                            }} />
                    )
                ))}
            </div>
        </>
    );
}

export default InputList;
