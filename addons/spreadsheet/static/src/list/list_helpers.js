/** @odoo-module */
// @ts-check

import { helpers } from "@odoo/o-spreadsheet";

const { getFunctionsFromTokens } = helpers;

/** @typedef {import("@odoo/o-spreadsheet").Token} Token */

/** @typedef {import("@spreadsheet/helpers/odoo_functions_helpers").Token} Token */

/**
 * Parse a spreadsheet formula and detect the number of LIST functions that are
 * present in the given formula.
 *
 * @param {Token[]} tokens
 *
 * @returns {number}
 */
export function getNumberOfListFormulas(tokens) {
<<<<<<< HEAD
    return getOdooFunctions(tokens, ["ODOO.LIST", "ODOO.LIST.HEADER"]).length;
=======
    return getFunctionsFromTokens(tokens, ["ODOO.LIST", "ODOO.LIST.HEADER"]).length;
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}

/**
 * Get the first List function description of the given formula.
 *
 * @param {Token[]} tokens
 *
 * @returns {import("../helpers/odoo_functions_helpers").OdooFunctionDescription|undefined}
 */
export function getFirstListFunction(tokens) {
<<<<<<< HEAD
    return getOdooFunctions(tokens, ["ODOO.LIST", "ODOO.LIST.HEADER"])[0];
=======
    return getFunctionsFromTokens(tokens, ["ODOO.LIST", "ODOO.LIST.HEADER"])[0];
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}
