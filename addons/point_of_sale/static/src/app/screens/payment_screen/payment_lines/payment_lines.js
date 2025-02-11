import { _t } from "@web/core/l10n/translation";
import { NumberPopup } from "@point_of_sale/app/utils/input_popups/number_popup";
import { useService } from "@web/core/utils/hooks";
import { Component, useState } from "@odoo/owl";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { parseFloat } from "@web/views/fields/parsers";
<<<<<<< HEAD
=======
import { enhancedButtons } from "@point_of_sale/app/generic_components/numpad/numpad";
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

export class PaymentScreenPaymentLines extends Component {
    static template = "point_of_sale.PaymentScreenPaymentLines";
    static props = {
        paymentLines: { type: Array, optional: true },
        deleteLine: Function,
        selectLine: Function,
        sendForceDone: Function,
        sendPaymentCancel: Function,
        sendPaymentRequest: Function,
        sendPaymentReverse: Function,
        updateSelectedPaymentline: Function,
    };

    setup() {
        this.ui = useState(useService("ui"));
        this.pos = usePos();
        this.dialog = useService("dialog");
    }

    selectedLineClass(line) {
        return { "payment-terminal": line.get_payment_status() };
    }
    unselectedLineClass(line) {
        return {};
    }
    async selectLine(paymentline) {
        this.props.selectLine(paymentline.uuid);
        if (this.ui.isSmall) {
            this.dialog.add(NumberPopup, {
                title: _t("New amount"),
<<<<<<< HEAD
                startingValue: paymentline.amount,
                isInputSelected: true,
                nbrDecimal: this.pos.currency.decimal_places,
=======
                buttons: enhancedButtons(),
                startingValue: this.env.utils.formatCurrency(paymentline.get_amount(), false),
                getPayload: (num) => {
                    this.props.updateSelectedPaymentline(parseFloat(num));
                },
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            });
        }
    }
}
