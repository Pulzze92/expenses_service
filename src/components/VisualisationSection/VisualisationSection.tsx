import React from 'react';
import Section from "../blocks/Section/Section";
import Box from "../ui/Box/Box";
import { ResponsivePie } from "@nivo/pie";

const VisualisationSection: React.FC = () => {
    const data = [
        { id: "Red", value: 300 },
        { id: "Blue", value: 50 },
        { id: "Yellow", value: 100 },
    ];

    const customColors = [
        { id: "Red", color: "#FF6384" },
        { id: "Blue", color: "#36A2EB" },
        { id: "Yellow", color: "#FFCE56" },
        // Add more data-color associations as needed
    ];

    const getColor = (datum: any) => {
        const colorObj = customColors.find(
            (colorData) => colorData.id === datum.id
        );
        return colorObj ? colorObj.color : "#000000"; // Default color if not found
    };
    return (
        <Section place="col_sbc" px="10" py="10">
            <Box place="col_sbc" px="10" py="10" width="50%" height="400px">
                <ResponsivePie
                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={4}
                    cornerRadius={8}
                    colors={getColor} // Use getColor function to get custom colors
                    isInteractive={true} // Enable hover interactions
                    tooltip={({ datum }) => (
                        <strong>detailed {datum.id}</strong>
                    )} // Define tooltip content
                    animate={true} // Enable animations
                    activeOuterRadiusOffset={8}
                    legends={[
                        {
                            anchor: "right",
                            direction: "column",
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 10, // Adjust spacing between legend items
                            itemWidth: 100,
                            itemHeight: 20,
                            itemTextColor: "#FFFFFF", // Set text color to white
                            symbolSize: 20,
                            symbolShape: "circle",
                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemTextColor: "#FFFFFF",
                                    },
                                },
                            ],
                        },
                    ]}
                />
            </Box>
        </Section>
    );
};

export default VisualisationSection;
