import { usePos } from "@point_of_sale/app/store/pos_hook";
import { Component, useState } from "@odoo/owl";
import { SelectPartnerButton } from "@point_of_sale/app/screens/product_screen/control_buttons/select_partner_button/select_partner_button";
import { useService } from "@web/core/utils/hooks";
import { BackButton } from "@point_of_sale/app/screens/product_screen/action_pad/back_button/back_button";

export class ActionpadWidget extends Component {
    static template = "point_of_sale.ActionpadWidget";
    static components = { SelectPartnerButton, BackButton };
    static props = {
        partner: { type: [Object, { value: null }], optional: true },
        onClickMore: { type: Function, optional: true },
        actionName: String,
        actionToTrigger: Function,
        showActionButton: { type: Boolean, optional: true },
    };
    static defaultProps = {
        showActionButton: true,
    };

    setup() {
        this.pos = usePos();
        this.ui = useState(useService("ui"));
    }
<<<<<<< HEAD

    get isLongName() {
        return this.props.partner && this.props.partner.name.length > 10;
    }
    get highlightPay() {
        return this.pos.get_order()?.orderlines?.length;
    }
    getMainButtonClasses() {
        return "button btn d-flex flex-column flex-fill align-items-center justify-content-center fw-bolder btn-lg rounded-0";
    }
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
}
