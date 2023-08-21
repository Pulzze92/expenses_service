const isEmpty = (value) => {
    return !Boolean(value.length);
};

const amauntValidation = (
    amauntTransaction,
    setAmauntTransactionsValidation,
    setAmauntTransactions
) => {
    if (isEmpty(amauntTransaction)) {
        setAmauntTransactionsValidation({
            id: 1,
            masage: "Amaunt should be filled",
            isValide: false,
            color: "error",
        });
        console.log(1);
        return;
    } else if (isNaN(amauntTransaction)) {
        setAmauntTransactionsValidation({
            id: 2,
            masage: "Amaunt should be a number",
            isValide: false,
            color: "error",
        });
        console.log(2);
        return;
    } else if (!(amauntTransaction.length < 6)) {
        setAmauntTransactionsValidation({
            id: 3,
            masage: "Amaunt should have 5 digits length",
            isValide: false,
            color: "error",
        });
        console.log(3);
        return;
    }
    setAmauntTransactionsValidation({
        id: 4,
        masage: "Nice! Good job!",
        isValide: true,
        color: "success",
    });
    setAmauntTransactions("");
};

export default amauntValidation;
