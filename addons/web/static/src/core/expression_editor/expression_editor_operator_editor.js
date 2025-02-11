import { getDomainDisplayedOperators } from "@web/core/domain_selector/domain_selector_operator_editor";

const EXPRESSION_VALID_OPERATORS = [
    "<",
    "<=",
    ">",
    ">=",
    "between",
<<<<<<< HEAD
=======
    "within",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    "in",
    "not in",
    "=",
    "!=",
    "set",
    "not_set",
    "is",
    "is_not",
];

export function getExpressionDisplayedOperators(fieldDef) {
    const operators = getDomainDisplayedOperators(fieldDef);
    return operators.filter((operator) => EXPRESSION_VALID_OPERATORS.includes(operator));
}
