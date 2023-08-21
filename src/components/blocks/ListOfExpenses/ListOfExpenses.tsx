import React from "react";
import Box from "../../ui/Box/Box";
import Section from "../Section/Section";
import Table from "../Table/Table";

const ListOfExpenses: React.FC = () => {
    return (
        <Section place="col_sbc">
            <Box place="col_sbc" width="80%" px="10" py="10">
                <Table />
            </Box>
        </Section>
    );
};

export default ListOfExpenses;
