/** @odoo-module **/
// @ts-check

<<<<<<< HEAD
/**
 * @typedef {import("@spreadsheet/helpers/odoo_functions_helpers").Token} Token
=======
import { helpers } from "@odoo/o-spreadsheet";

const { getFunctionsFromTokens } = helpers;

/**
 * @typedef {import("@odoo/o-spreadsheet").Token} Token
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
 * @typedef  {import("@spreadsheet/helpers/odoo_functions_helpers").OdooFunctionDescription} OdooFunctionDescription
 */

/**
 * @param {Token[]} tokens
 * @returns {number}
 */
export function getNumberOfAccountFormulas(tokens) {
<<<<<<< HEAD
    return getOdooFunctions(tokens, ["ODOO.BALANCE", "ODOO.CREDIT", "ODOO.DEBIT"]).length;
=======
    return getFunctionsFromTokens(tokens, ["ODOO.BALANCE", "ODOO.CREDIT", "ODOO.DEBIT", "ODOO.RESIDUAL", "ODOO.PARTNER.BALANCE"]).length;
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}

/**
 * Get the first Account function description of the given formula.
 *
 * @param {Token[]} tokens
 * @returns {OdooFunctionDescription | undefined}
 */
export function getFirstAccountFunction(tokens) {
<<<<<<< HEAD
    return getOdooFunctions(tokens, ["ODOO.BALANCE", "ODOO.CREDIT", "ODOO.DEBIT"])[0];
=======
    return getFunctionsFromTokens(tokens, ["ODOO.BALANCE", "ODOO.CREDIT", "ODOO.DEBIT", "ODOO.RESIDUAL", "ODOO.PARTNER.BALANCE"])[0];
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}
