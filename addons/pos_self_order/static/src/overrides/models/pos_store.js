import { PosStore } from "@point_of_sale/app/store/pos_store";
import { patch } from "@web/core/utils/patch";
import { PosOrder } from "@point_of_sale/app/models/pos_order";

patch(PosStore.prototype, {
    async getServerOrders() {
        if (this.session._self_ordering) {
            await this.loadServerOrders([
                ["company_id", "=", this.config.company_id.id],
                ["state", "=", "draft"],
                "|",
                ["pos_reference", "ilike", "Kiosk"],
                ["pos_reference", "ilike", "Self-Order"],
                ["table_id", "=", false],
            ]);
        }

        return await super.getServerOrders(...arguments);
    },
    _shouldLoadOrders() {
        return super._shouldLoadOrders() || this.session._self_ordering;
    },
});

<<<<<<< HEAD
patch(Order.prototype, {
    setup() {
        super.setup(...arguments);
        if (this.name.startsWith('Self-Order')) {
            this.trackingNumber = "S" + this.trackingNumber
        }
    },

    defaultTableNeeded(options) {
        return (
            super.defaultTableNeeded(...arguments) &&
            !this.name.includes("Kiosk") &&
            !this.name.includes("Self-Order")
        );
=======
patch(PosOrder.prototype, {
    setup() {
        super.setup(...arguments);
        if (this.pos_reference?.startsWith("Self-Order")) {
            this.tracking_number = "S" + this.tracking_number;
        }
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    },

    updateSequenceNumber(json){
        if(!json.name.startsWith('Self-Order')) {
            super.updateSequenceNumber(json);
        }
    }
});
