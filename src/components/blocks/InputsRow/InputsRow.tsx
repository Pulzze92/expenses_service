import React from "react";
import Input from "../../ui/Input/Input";

interface InputsRowProps {
    placeholders: string[];
    action: (value: string) => void;
}

const InputsRow: React.FC<InputsRowProps> = ({ placeholders, action }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '3rem', flexWrap: 'wrap' }}>
            {placeholders.map((label) => (
                <Input
                    key={label}
                    placeholder={label || ''}
                    action={value => {
                        action(value);
                    }}
                    width='8.5rem'
                    margin='1rem 1rem'
                    size='small'
                />
            ))}
        </div >
    );
}

export default InputsRow;
