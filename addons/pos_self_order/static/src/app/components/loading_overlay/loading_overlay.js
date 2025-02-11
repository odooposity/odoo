<<<<<<< HEAD
/** @odoo-module */

=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
import { Component, onMounted, useState } from "@odoo/owl";

export class LoadingOverlay extends Component {
    static template = "pos_self_order.LoadingOverlay";
<<<<<<< HEAD
=======
    static props = {};
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8

    setup() {
        this.state = useState({
            loading: false,
        });

        onMounted(() => {
            setTimeout(() => {
                this.state.loading = true;
            }, 200);
        });
    }
}
