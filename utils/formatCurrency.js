
module.exports =  function formatCurrency(amount, currency='USD'){
    if(!amount) return amount;
    return parseFloat(amount).toLocaleString('en-US', 
            { 
            style: 'currency', 
            currency: currency
        });
}