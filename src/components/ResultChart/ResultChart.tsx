import { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { BarTooltipProps } from '@nivo/bar';

interface DataObject {
    well_num: string;
    operation_object: string;
    filling_quality_factor: string;
}

const ResultChart: React.FC = () => {
    const resultData: DataObject[] = [{
        well_num: 'loading',
        operation_object: 'loading',
        filling_quality_factor: 'loading',
    }];

    const [data, setData] = useState(resultData);

    const getInitialResultData = async () => {
        const url = 'http://localhost:3000/actions';
        const response = await fetch(url);
        const data: DataObject[] = await response.json();
        const modifiedData = data.map((item) => ({
            ...item,
            action: 'delete',
        }));
        setData(modifiedData);
    };

    useEffect(() => {
        getInitialResultData();
    }, []);

    const theme = {
        axis: {
            ticks: {
                text: {
                    fill: '#fff',
                    fontSize: 12,
                },
            },
            legend: {
                text: {
                    fill: '#fff',
                    fontSize: 14,
                    fontWeight: 'bold',
                },
            },
        },
    };

    const sortedData = data.slice().sort((a, b) => b.filling_quality_factor - a.filling_quality_factor);

    const CustomTooltip = ({ data }: BarTooltipProps) => (
        <div style={{ background: 'rgba(0, 0, 0, 0.8)', color: '#fff', padding: '8px', borderRadius: '4px', fontSize: '10px' }}>
            <div><strong>№ скважины</strong> {data.well_num}</div>
            <div><strong>Коэффициент качества заполнения</strong> {data.filling_quality_factor}</div>
        </div>
    );

    return (
        <ResponsiveBar
            height={400}
            data={sortedData}
            keys={['filling_quality_factor']}
            indexBy="well_num"
            margin={{ top: 20, right: 60, bottom: 50, left: 50 }}
            padding={0.3}
            layout="vertical"
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '"№ скв.',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Коэффициент качества заполнения',
                legendPosition: 'middle',
                legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 10.6]] }}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            theme={theme}
            tooltip={CustomTooltip}
        />
    );
}

export default ResultChart;