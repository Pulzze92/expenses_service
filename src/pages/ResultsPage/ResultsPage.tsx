import React from 'react';
import BaseWorkspace from '../../components/layouts/BaseWorkspace/BaseWorkspace';
import ResultTable from '../../components/ResultTable/ResultTable';
import ResultChart from '../../components/ResultChart/ResultChart';


const ResultsPage: React.FC = () => {
    return (
        <BaseWorkspace initialItemList={[1, 2]}>
            <ResultTable />
            <ResultChart />
        </BaseWorkspace>
    );
};

export default ResultsPage;
