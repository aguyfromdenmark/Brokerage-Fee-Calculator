function Trade(){
  this.AccountType = "Standard";
  this.Price = 0;
  this.Amount = 0;
  this.Market = "Denmark";
  this.TradeType = "";
  this.UnitPrice = 0;
  this.TotalPrice = 0;

  this.GetTotalTradePrice = function(AccountType,Price,Amount,Market,TradeType){

    var AccountFee = GetAccountFee(AccountType);
    console.log(AccountFee);

    var BrokerageFee = GetBrokerageFee(Price,AccountFee,Market);
    console.log(BrokerageFee);

    switch (TradeType) {
      case "Buy":
        TotalPrice = Price + BrokerageFee;
        break;
      case "Sell":
        TotalPrice = Price - BrokerageFee;
        break;
      default:
        TotalPrice = 0;
    }

    return TotalPrice;
  };

  this.GetUnitPrice = function(TotalPrice,Amount) {
    var UnitPrice = 0;

    if (TotalPrice > 0) {
      UnitPrice = TotalPrice / Amount;
      return UnitPrice;
    } else {
      return false;
    }
  };

  this.GetAccountFee(AccountType){
    var AccountFee = 0;

    switch (AccountType) {
      case "Standard":
      AccountFee = 9.1;
        break;
      case "Bonus":
        AccountFee = 0.075;
        break;
      case "Pro":
        AccountFee = 0.05;
      default:
        AccountFee = 0;
    }
    return AccountFee;
  };

  this.GetMarketMinimumFee(Market){
    var MarketMinimumFee = 0;

    switch (Market) {
      case "DK":
        MarketMinimumFee = 29;
        break;
      case "SE":
        MarketMinimumFee = 59;
        break;
      case "NO":
        MarketMinimumFee = 59;
      default:
        MarketMinimumFee = 0;
    }

    return MarketMinimumFee;
  };

  this.GetBrokerageFee(Price,AccountFee,Market){
    var BrokerageFee = 0;
    var MarketMinimumFee = GetMarketMinimumFee(Market);

    BrokerageFee = (Price/100) * AccountFee;

    if (BrokerageFee > MarketMinimumFee) {
      return BrokerageFee;
    }else {
      BrokerageFee = MarketMinimumFee;
    }

    return BrokerageFee;
  };
};
