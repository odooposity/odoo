import { patch } from "@web/core/utils/patch";
import { ActionpadWidget } from "@point_of_sale/app/screens/product_screen/action_pad/action_pad";
import { TicketScreen } from "@point_of_sale/app/screens/ticket_screen/ticket_screen";
/**
 * @props partner
 */

patch(ActionpadWidget.prototype, {
    setup() {
        super.setup();
    },
    get swapButton() {
        return (
            this.pos.config.module_pos_restaurant && this.pos.mainScreen.component !== TicketScreen
        );
    },
    get currentOrder() {
        return this.pos.get_order();
    },
    get hasChangesToPrint() {
        let hasChange = this.pos.getOrderChanges();
        hasChange =
            hasChange.generalNote == ""
                ? true // for the case when removed all general note
                : hasChange.count || hasChange.generalNote || hasChange.modeUpdate;
        return hasChange;
    },
    get swapButtonClasses() {
        return {
            "highlight btn-primary justify-content-between": this.displayCategoryCount.length,
            "btn-light pe-none disabled justify-content-center": !this.displayCategoryCount.length,
            altlight: !this.hasChangesToPrint && this.currentOrder?.hasSkippedChanges(),
        };
    },
<<<<<<< HEAD
    async submitOrder() {
        if (!this.clicked) {
            this.clicked = true;
            try {
                await this.pos.sendOrderInPreparationUpdateLastChange(this.currentOrder);
            } finally {
                this.clicked = false;
            }
        }
=======
    submitOrder() {
        this.pos.sendOrderInPreparationUpdateLastChange(this.currentOrder);
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    },
    hasQuantity(order) {
        if (!order) {
            return false;
        } else {
            return order.lines.reduce((totalQty, line) => totalQty + line.get_quantity(), 0) > 0;
        }
    },
    get highlightPay() {
        return (
            this.currentOrder?.lines?.length &&
            !this.hasChangesToPrint &&
            this.hasQuantity(this.currentOrder)
        );
    },
<<<<<<< HEAD
    get categoryCount() {
        const orderChange = this.currentOrder.getOrderChanges().orderlines;

        const categories = Object.values(orderChange).reduce((acc, curr) => {
            const categoryId = this.pos.db.product_by_id[curr.product_id].pos_categ_ids[0];
            const category = this.pos.db.category_by_id[categoryId];
            if (category) {
                if (!acc[category.id]) {
                    acc[category.id] = {
                        count: curr.quantity,
                        name: category.name,
                        id: category.id,
                    };
                } else {
                    acc[category.id].count += curr.quantity;
                }
            }
            return acc;
        }, {});
        return Object.values(categories);
    },
    get displayCategoryCount() {
        return this.categoryCount.slice(0, 3);
    },
    get isCategoryCountOverflow() {
        if (this.categoryCount.length > 3) {
=======
    get displayCategoryCount() {
        return this.pos.categoryCount.slice(0, 4);
    },
    get isCategoryCountOverflow() {
        if (this.pos.categoryCount.length > 4) {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            return true;
        }
        return false;
    },
});
