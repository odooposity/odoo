/** @odoo-module */

import { patch } from "@web/core/utils/patch";
import { PosStore } from "@point_of_sale/app/store/pos_store";

patch(PosStore.prototype, {
    async setTable(table, orderUid = null) {
<<<<<<< HEAD
        await super.setTable(...arguments)
        this.selectedOrder._updateRewards()
    }
})
=======
        await super.setTable(...arguments);
        this.updateRewards();
    },
});
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
