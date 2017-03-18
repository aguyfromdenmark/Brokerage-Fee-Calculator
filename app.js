var lsAccountType = localStorage.getItem('lsAccountType');
var lsMarket = localStorage.getItem('lsMarket');

if (lsAccountType !== null && lsMarket !== null) {
    var lsSelectedAccountType = $('input[name=accountType][value='+lsAccountType+']');
    var lsSelectedMarket = $('input[name=market][value='+lsMarket+']');

    $(lsSelectedAccountType).prop('checked',true);
    $(lsSelectedMarket).prop('checked',true);   

    $(lsSelectedAccountType).prev('.radio-selector.account').addClass('selected');
    $(lsSelectedMarket).prev('.radio-selector.market').addClass('selected'); 
     
}

if (typeof(Storage) !== 'undefined') {
    var accountTypeRadio = $('input[name=accountType]');
    var marketRadio = $('input[name=market]');

    accountTypeRadio.change(function(){
        var selectedAccountType = $(this).val();  
        localStorage.setItem('lsAccountType', selectedAccountType);
    });

    marketRadio.change(function(){
        var selectedMarket = $(this).val();
        localStorage.setItem('lsMarket',selectedMarket);
    });
}

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

$('.radio-selector').on('click',function(){
    $(this).siblings('.radio-selector').removeClass('selected');
    $(this).addClass('selected');
    $(this).next('input[type=radio]').prop('checked',true);
});