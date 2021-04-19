const productsList = require("../options/products");
const offersList = require("../options/offers");
// const accountInfo = require("../options/accountInfo");
const redirectWelcome = require("../options/redirectWelcome")
const customerRep = require("../options/customerRep");
const rewardPoints = require("../options/rewardPoints");
const accountMenu = require("../options/accountMenu");
const pointBalance = require("../options/pointBalance")
const orderDetails = require("../options/orderDetails")

module.exports = function rewards(digit) {
    console.log("Rewards")
    console.log(digit)
    const optionActions = {
      '1': pointBalance, //
      '2': orderDetails,
      '3': rewardPoints,
      '4': accountMenu, // rewards
      '9': redirectWelcome,
      '0': customerRep
    };
  
    return (optionActions[digit])
      ? optionActions[digit]()
      : redirectWelcome();
};