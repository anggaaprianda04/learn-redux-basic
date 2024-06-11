export const formatMoney = (price, currency, location) => {
    let Money = new Intl.NumberFormat(location, {
        style: 'currency',
        currency: currency,
    })

    return Money.format(price);
}