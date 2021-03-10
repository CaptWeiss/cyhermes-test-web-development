// import Intl from 'intl';
// amount formatter
/**
 * This can be used to format amount in Naira properly
 * @example
 * ngn.format(parseFloat('14304736.75')) // output ₦14,304,736.75
 */
export const ngn = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 2, currencyDisplay: 'symbol' });
export const PriceFormat = new Intl.NumberFormat();

export default ngn;