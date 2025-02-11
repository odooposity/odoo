<<<<<<< HEAD
/** @odoo-module **/

import { helpers } from "@odoo/o-spreadsheet";

const { createCurrencyFormat } = helpers;

/**
 * @param {object} currency
 * @returns {string}
 */
export function createDefaultCurrencyFormat(currency) {
    return createCurrencyFormat({
        symbol: currency.symbol,
        position: currency.position,
        decimalPlaces: currency.decimalPlaces,
    });
=======
/**
 * Return the currency cleaned from useless info and from the `code` field to be used to generate
 * a default currency format.
 *
 * @param {object} currency
 * @returns {object}
 */
export function createDefaultCurrency(currency) {
    if (!currency) {
        return undefined;
    }
    return {
        symbol: currency.symbol,
        position: currency.position,
        decimalPlaces: currency.decimalPlaces,
    };
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}
