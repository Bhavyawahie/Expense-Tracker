//  @desc    Get all Transactions
//  @Route   GET /api/v1/transactions
//  access   Public
exports.getTransactions = (req, res, next) => {
    res.send("GET Transactions");
}

//  @desc    Add all Transactions
//  @Route   POST /api/v1/transactions
//  access   Public
exports.addTransactions = (req, res, next) => {
    res.send("POST Transactions");
}

//  @desc    Delete a Transaction
//  @Route   DELETE /api/v1/transactions/:id
//  access   Public
exports.deleteTransactions = (req, res, next) => {
    res.send("DELETE Transactions");
}