const express = require('express');
const customer = require('../../models/Customer');
const router = express.Router();

//Customer model
const Customer = require('../../models/Customer');

// @route   GET api/customers
// @desc    Get all customers
// @access  Public

router.get('/', (req, res) => {
    Customer.find()
    .sort({ date: -1 })
    .then(customers => res.json(customers))
});

//@route    POST api/customers
//@desc     Create a customer if not exists
//@access   Public

router.post('/', (req, res) => {
    Customer.find({emailID: self.emailID}), function(err, user){
        if(!user.length)
        {
            const newCustomer = Customer({
                custname: req.body.custname,
                emailID: req.body.emailID,
                location: req.body.location                
            });
            newCustomer.save().then(customer => res.json(customer));
        }
        else
        {
            console.log("Customer with same emailID already exists")
        }
    }
});