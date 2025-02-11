<<<<<<< HEAD
/** @odoo-module */
import { getNumberOfPivotFormulas } from "./pivot_helpers";
=======
// @ts-check
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

import { navigateTo } from "../actions/helpers";
import { helpers } from "@odoo/o-spreadsheet";
const { getNumberOfPivotFunctions } = helpers;

/**
 * @param {import("@odoo/o-spreadsheet").CellPosition} position
 * @param {import("@spreadsheet").SpreadsheetChildEnv} env
 * @returns {Promise<void>}
 */
export const SEE_RECORDS_PIVOT = async (position, env) => {
    const pivotId = env.model.getters.getPivotIdFromPosition(position);
<<<<<<< HEAD
    const { model } = env.model.getters.getPivotDefinition(pivotId);
    const dataSource = await env.model.getters.getAsyncPivotDataSource(pivotId);

    const argsDomain = env.model.getters.getPivotDomainArgsFromPosition(position)?.domainArgs;
    const domain = dataSource.getPivotCellDomain(argsDomain);
    const name = await dataSource.getModelLabel();
    await env.services.action.doAction({
        type: "ir.actions.act_window",
        name,
        res_model: model,
        view_mode: "list",
        views: [
            [false, "list"],
            [false, "form"],
        ],
        target: "current",
        domain,
    });
};

export const SEE_RECORDS_PIVOT_VISIBLE = (position, env) => {
    const cell = env.model.getters.getCorrespondingFormulaCell(position);
    const evaluatedCell = env.model.getters.getEvaluatedCell(position);
    const argsDomain = env.model.getters.getPivotDomainArgsFromPosition(position)?.domainArgs;
    const pivotId = env.model.getters.getPivotIdFromPosition(position);
    if (!env.model.getters.isExistingPivot(pivotId)) {
        return false;
    }
    const dataSource = env.model.getters.getPivotDataSource(pivotId);
    return (
        dataSource.isReady() &&
=======
    const pivot = env.model.getters.getPivot(pivotId);
    await pivot.load();
    const { model } = pivot.definition;
    const { actionXmlId, context } = env.model.getters.getPivotCoreDefinition(pivotId);
    const pivotCell = env.model.getters.getPivotCellFromPosition(position);
    const domain = pivot.getPivotCellDomain(pivotCell.domain);
    const name = await pivot.getModelLabel();
    await navigateTo(
        env,
        actionXmlId,
        {
            type: "ir.actions.act_window",
            name,
            res_model: model,
            views: [
                [false, "list"],
                [false, "form"],
            ],
            target: "current",
            domain,
            context,
        },
        { viewType: "list" }
    );
};

/**
 * @param {import("@odoo/o-spreadsheet").CellPosition} position
 * @param {import("@spreadsheet").OdooGetters} getters
 * @returns {boolean}
 */
export const SEE_RECORDS_PIVOT_VISIBLE = (position, getters) => {
    const cell = getters.getCorrespondingFormulaCell(position);
    const evaluatedCell = getters.getEvaluatedCell(position);
    const pivotId = getters.getPivotIdFromPosition(position);
    const pivotCell = getters.getPivotCellFromPosition(position);
    return !!(
        pivotId &&
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        evaluatedCell.type !== "empty" &&
        evaluatedCell.type !== "error" &&
        evaluatedCell.value !== "" &&
        pivotCell.type !== "EMPTY" &&
        cell &&
        cell.isFormula &&
<<<<<<< HEAD
        getNumberOfPivotFormulas(cell.compiledFormula.tokens) === 1
=======
        getNumberOfPivotFunctions(cell.compiledFormula.tokens) === 1 &&
        getters.getPivotCoreDefinition(pivotId).type === "ODOO" &&
        getters.getPivot(pivotId).getPivotCellDomain(pivotCell.domain)
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    );
};

/**
 * Check if the cell is a pivot formula and if there is a filter matching the
 * pivot domain args.
 * e.g. =PIVOT.VALUE("1", "measure", "country_id", 1) matches a filter on
 * country_id.
 *
 * @returns {boolean}
 */
export function SET_FILTER_MATCHING_CONDITION(position, getters) {
    if (!SEE_RECORDS_PIVOT_VISIBLE(position, getters)) {
        return false;
    }

<<<<<<< HEAD
    const pivotId = env.model.getters.getPivotIdFromPosition(position);
    const pivotInfo = env.model.getters.getPivotDomainArgsFromPosition(position);
    if (pivotInfo?.domainArgs === undefined) {
        return false;
    }
    const matchingFilters = env.model.getters.getFiltersMatchingPivotArgs(
        pivotId,
        pivotInfo?.domainArgs
    );
    return pivotInfo?.isHeader && matchingFilters.length > 0;
=======
    const pivotId = getters.getPivotIdFromPosition(position);
    const pivotCell = getters.getPivotCellFromPosition(position);
    if (pivotCell.type === "EMPTY") {
        return false;
    }
    const matchingFilters = getters.getFiltersMatchingPivotArgs(pivotId, pivotCell.domain);
    return matchingFilters.length > 0 && pivotCell.type === "HEADER";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}

export function SET_FILTER_MATCHING(position, env) {
    const pivotId = env.model.getters.getPivotIdFromPosition(position);
<<<<<<< HEAD
    const domainArgs = env.model.getters.getPivotDomainArgsFromPosition(position)?.domainArgs;
    const filters = env.model.getters.getFiltersMatchingPivotArgs(pivotId, domainArgs);
=======
    const domain = env.model.getters.getPivotCellFromPosition(position).domain;
    const filters = env.model.getters.getFiltersMatchingPivotArgs(pivotId, domain);
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    env.model.dispatch("SET_MANY_GLOBAL_FILTER_VALUE", { filters });
}
