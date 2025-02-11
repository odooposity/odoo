import { PaymentStripe } from "@pos_stripe/app/payment_stripe";
import { patch } from "@web/core/utils/patch";

patch(PaymentStripe.prototype, {
    async captureAfterPayment(processPayment, line) {
        // Don't capture if the customer can tip, in that case we
        // will capture later.
        if (!this.canBeAdjusted(line.uuid)) {
            return super.captureAfterPayment(...arguments);
        }
    },

    canBeAdjusted(uuid) {
        var order = this.pos.get_order();
        var line = order.get_paymentline_by_uuid(uuid);
        return (
            this.pos.config.set_tip_after_payment &&
<<<<<<< HEAD
            line.payment_method.use_payment_terminal === "stripe" &&
=======
            line.payment_method_id.use_payment_terminal === "stripe" &&
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            line.card_type !== "interac" &&
            (!line.card_type || !line.card_type.includes("eftpos"))
        );
    },
});
