const Transaction = require('../models/Transaction')

//  @desc    Get all Transactions
//  @Route   GET /api/v1/transactions
//  access   Public
const getTransactions = async (req, res, next) => {
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
const addTransactions = async (req, res, next) => {
    try {
        const { text, amount } =  req.body;
        const transaction = await Transaction.create({text, amount});
        return res.status(201).json({
            success: true,
            data: transaction
        });
    }
    catch (err) {
        if(err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            });
        }
        else {
            return res.status(500).json({
                success: false,
                error: "Server Error"
            })
        }
    }
}

//  @desc    Delete a Transaction
//  @Route   DELETE /api/v1/transactions/:id
//  access   Public
const deleteTransactions =  async (req, res, next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id)
        if(!transaction) {
            return res.status(404).json({
                success: false,
                error: "No Transaction found"
            });
        }
        return res.status(200).json({
            success: true,
            data: {}
        })
    }
    catch (err){
        return res.status(500).json({
            success: false,
            error: "Server Error"
        })
    }
}

module.exports = {
    getTransactions,
    addTransactions,
    deleteTransactions
}