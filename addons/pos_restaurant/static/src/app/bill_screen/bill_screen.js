import { Dialog } from "@web/core/dialog/dialog";
import { OrderReceipt } from "@point_of_sale/app/screens/receipt_screen/receipt/order_receipt";
import { Component, useState } from "@odoo/owl";
import { usePos } from "@point_of_sale/app/store/pos_hook";
import { useService } from "@web/core/utils/hooks";

export class BillScreen extends Component {
    static template = "pos_restaurant.BillScreen";
<<<<<<< HEAD
    static components = { OrderReceipt };
    confirm() {
        if (!this.env.isMobile) {
            this.props.resolve({ confirmed: true, payload: null });
            this.pos.closeTempScreen();
        }
    }
    /**
     * @override
     */
    async printReceipt() {
        const order = this.currentOrder;
        await super.printReceipt();
        order._printed = false;
=======
    static components = { OrderReceipt, Dialog };
    static props = {
        close: Function,
    };
    setup() {
        this.pos = usePos();
        this.printer = useState(useService("printer"));
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    }
    async print() {
        await this.pos.printReceipt({
            printBillActionTriggered: true,
        });
    }
}
