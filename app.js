$('#tradeCalculateButton').on('click', function () {

    var accountType = $('input[name=accountType]:checked').val();
    var market = $('input[name=market]:checked').val();
    var price = $('input[name=tradePrice]').val();
    var amount = $('input[name=tradeAmount]').val();
    var tradeType = $('input[name=tradeType]:checked').val();

    price = parseFloat(price);
    amount = parseFloat(amount);

    var trade = new Trade(accountType, price, market, tradeType);

    var totalTradeResult = trade.GetTotalTradePrice();
    totalTradeResult = parseFloat(totalTradeResult);

    var tradeUnitResult = totalTradeResult / amount;

    $('#totalTradeResult').html(totalTradeResult + " " + trade.Market);
    $('#tradeUnitResult').html((tradeUnitResult) + " " + trade.Market);
    trade = null;
});