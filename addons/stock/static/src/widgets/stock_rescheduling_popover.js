/** @odoo-module */
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";
import {
    PopoverComponent,
    PopoverWidgetField,
    popoverWidgetField,
} from "@stock/widgets/popover_widget";

<<<<<<< HEAD
export class  StockRescheculingPopoverComponent extends PopoverComponent {
=======
export class StockRescheculingPopoverComponent extends PopoverComponent {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    setup(){
        this.action = useService("action");
    }

    openElement(ev){
        this.action.doAction({
            res_model: ev.currentTarget.getAttribute('element-model'),
            res_id: parseInt(ev.currentTarget.getAttribute('element-id')),
            views: [[false, "form"]],
            type: "ir.actions.act_window",
            view_mode: "form",
        });
    }
}

export class StockRescheculingPopover extends PopoverWidgetField {
<<<<<<< HEAD
=======
    static components = {
        Popover: StockRescheculingPopoverComponent
    };
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    setup(){
        super.setup();
        this.color = this.jsonValue.color || 'text-danger';
        this.icon = this.jsonValue.icon || 'fa-exclamation-triangle';
    }

    showPopup(ev){
        if (!this.jsonValue.late_elements){
            return;
        }
        super.showPopup(ev);
    }
}

registry.category("fields").add("stock_rescheduling_popover", {
    ...popoverWidgetField,
    component: StockRescheculingPopover,
});
