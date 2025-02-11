/** @odoo-module **/

import { registry } from "@web/core/registry";
import * as tourUtils from "@website_sale/js/tours/tour_utils";

registry.category("web_tour.tours").add('shop_buy_product', {
    url: '/shop',
    steps: () => [
        ...tourUtils.searchProduct("Storage Box"),
        {
            content: "select Storage Box",
            trigger: '.oe_product_cart:first a:contains("Storage Box")',
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "click on add to cart",
            trigger: '#product_detail form[action^="/shop/cart/update"] #add_to_cart',
            run: "click",
        },
        tourUtils.goToCart(),
        tourUtils.goToCheckout(),
        tourUtils.confirmOrder(),
        ...tourUtils.payWithTransfer(true),
    ]
});
