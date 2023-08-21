import React from 'react';
import InputList from '../../components/blocks/InputList/InputList';
import BaseWorkspace from '../../components/layouts/BaseWorkspace/BaseWorkspace';

const InputPage: React.FC = () => {
    return (
        <BaseWorkspace initialItemList={['three', 'four']} >
            <InputList />
        </BaseWorkspace >
    );
};

export default InputPage;
