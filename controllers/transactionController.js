const Transaction = require('../models/Transaction')

//  @desc    Get all Transactions
//  @Route   GET /api/v1/transactions
//  access   Public
exports.getTransactions = async (req, res, next) => {
    try{
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    }
    catch (err) {
        return res.send(500).json({
            success: false,
            error: "Server Error"
        })
    }
}

//  @desc    Add all Transactions
//  @Route   POST /api/v1/transactions
//  access   Public
exports.addTransactions = async (req, res, next) => {
    try {
        const { text, amount } =  req.body;
        const transaction = await Transaction.create(req.body);
        return res.send(201).json({
            success: true,
            data: transaction
        });
    }
    catch (err) {
        console.log(err);
    }
}

//  @desc    Delete a Transaction
//  @Route   DELETE /api/v1/transactions/:id
//  access   Public
exports.deleteTransactions =  (req, res, next) => {
    res.send("DELETE Transactions");
}