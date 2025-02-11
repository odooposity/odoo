/** @odoo-module **/
import { patch } from "@web/core/utils/patch";

import { ProductCatalogKanbanRecord } from "@product/product_catalog/kanban_record";

patch(ProductCatalogKanbanRecord.prototype, {
<<<<<<< HEAD
    _getUpdateQuantityAndGetPrice() {
        return {
            ...super._getUpdateQuantityAndGetPrice(),
=======
    _getUpdateQuantityAndGetPriceParams() {
        return {
            ...super._getUpdateQuantityAndGetPriceParams(),
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            project_id: this.props.record.context.project_id,
        };
    },
});
