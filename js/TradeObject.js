function Trade(accountType,price,market,tradeType){
  this.AccountType = accountType;
  this.Price = price;
  this.Market = market;
  this.TradeType = tradeType;

  this.GetTotalTradePrice = function(){
    var totalPrice = 0;

    var accountFee = this.GetAccountFee();
    var brokerageFee = this.GetBrokerageFee(accountFee);

    brokerageFee = parseFloat(brokerageFee);

    switch (this.TradeType) {
      case "Buy":
        totalPrice = this.Price + brokerageFee;
        break;
      case "Sell":
        totalPrice = this.Price - brokerageFee;
        break;
      default:
        totalPrice = 0;
    }

    return totalPrice;
  };

  this.GetAccountFee = function(){
    var accountFee = 0;

    switch (this.AccountType) {
      case "Standard":
      accountFee = 0.1;
        break;
      case "Bonus":
        accountFee = 0.075;
        break;
      case "Pro":
        accountFee = 0.05;
        break;
      default:
        accountFee = 0;
    }
    return accountFee;
  };

  this.GetMarketMinimumFee = function(){
    var marketMinimumFee = 0;

    switch (this.Market) {
      case "DKK":
        marketMinimumFee = 29;
        break;
      case "SEK":
      case "NOK":
        if (this.AccountType == "Bonus") {
            marketMinimumFee = 49;
        }else if (this.AccountType == "Pro") {
          marketMinimumFee = 39;
        } else {
          marketMinimumFee = 59;
        }
        break;
      default:
        marketMinimumFee = 0;
    }

    return marketMinimumFee;
  };

  this.GetBrokerageFee = function(accountFee){
    var brokerageFee = 0;
    var marketMinimumFee = this.GetMarketMinimumFee();
    brokerageFee = (this.Price/100) * accountFee;

    if (brokerageFee > marketMinimumFee) {
      return brokerageFee;
    }else {
      brokerageFee = marketMinimumFee;
    }

    return brokerageFee;
  };
};
