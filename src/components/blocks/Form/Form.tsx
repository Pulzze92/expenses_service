import React, { useState } from 'react';
import Box from "../../ui/Box/Box";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Section from "../Section/Section";
import amauntValidation from "./FormValidation";

const Form: React.FC = () => {
    const [amauntTransaction, setAmauntTransactions] = useState<string>("");
    const [typeTraksaction, setTypeTraksaction] = useState<string>("");
    const [commentTransaction, setCommentTransaction] = useState<string>("");

    const [amauntTransactionValidation, setAmauntTransactionsValidation] =
        useState<{
            id: number;
            masage: string;
            isValide: boolean;
            color: string;
        }>({
            id: 0,
            masage: "this is initial state",
            isValide: true,
            color: "primary",
        });
    const [typeTransactionValidation, setTypeTransactionValidation] = useState<{
        id: number;
        masage: string;
        isValide: boolean;
        color: string;
    }>({
        id: 0,
        masage: "this is initial state",
        isValide: true,
        color: "primary",
    });
    const [commentTransactionValidation, setCommentTransactionValidation] =
        useState<{
            id: number;
            masage: string;
            isValide: boolean;
            color: string;
        }>({
            id: 0,
            masage: "this is initial state",
            isValide: true,
            color: "primary",
        });

    return (
        <Section place="col_sbc">
            <Box place="col_sbc" px="10" py="10" width="50%">
                <Input
                    inputValue={amauntTransaction}
                    placeholder="Введите сумму транзакции"
                    action={setAmauntTransactions}
                    color={amauntTransactionValidation.color}
                />
                <Input
                    placeholder="Введите тип транзакции"
                    action={setTypeTraksaction}
                />
                <Input
                    placeholder="Введите комментарий"
                    action={setCommentTransaction}
                />
                <Button
                    color="success"
                    type="outline"
                    shape="rounded"
                    size="medium"
                    onClick={() =>
                        amauntValidation(
                            amauntTransaction,
                            setAmauntTransactionsValidation,
                            setAmauntTransactions
                        )
                    }
                >
                    Submit
                </Button>
            </Box>
        </Section>
    );
};

export default Form;
