'use strict';

const signToken  = require("../middleware/loginMiddle");
const User = require("../modals/User");

const home = async (req, res) => {
    try {
        const token = await signToken(req, res, next);
        res.send(token);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    home,
};  



