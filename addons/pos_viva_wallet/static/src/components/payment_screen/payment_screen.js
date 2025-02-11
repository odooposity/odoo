<<<<<<< HEAD
/** @odoo-module */

=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import { PaymentScreen } from "@point_of_sale/app/screens/payment_screen/payment_screen";
import { patch } from "@web/core/utils/patch";
import { onMounted } from "@odoo/owl";

patch(PaymentScreen.prototype, {
    setup() {
        super.setup(...arguments);
        onMounted(() => {
<<<<<<< HEAD
            const pendingPaymentLine = this.currentOrder.paymentlines.find(
                (paymentLine) =>
                    paymentLine.payment_method.use_payment_terminal === "viva_wallet" &&
=======
            const pendingPaymentLine = this.currentOrder.payment_ids.find(
                (paymentLine) =>
                    paymentLine.payment_method_id.use_payment_terminal === "viva_wallet" &&
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
                    !paymentLine.is_done() &&
                    paymentLine.get_payment_status() !== "pending"
            );
            if (!pendingPaymentLine) {
                return;
            }
        });
    },
});
