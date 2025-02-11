/** @odoo-module **/

import { registry } from "@web/core/registry";
<<<<<<< HEAD
import tourUtils from "@website_sale/js/tours/tour_utils";

registry.category("web_tour.tours").add('update_billing_shipping_address', {
    test: true,
=======
import * as tourUtils from "@website_sale/js/tours/tour_utils";

registry.category("web_tour.tours").add('update_billing_shipping_address', {
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
    url: '/shop',
    steps: () => [
        ...tourUtils.addToCart({productName: "Office Chair Black TEST"}),
        tourUtils.goToCart({quantity: 1}),
        tourUtils.goToCheckout(),
<<<<<<< HEAD
        {
            content: "Edit Address",
            trigger: '#shipping_and_billing a:contains("Edit")'
        },
        {
            content: "Edit  billing address which is shipping address too",
            trigger: 'a.js_edit_address'
=======
        tourUtils.confirmOrder(),
        {
            content: "Edit Address",
            trigger: '#delivery_and_billing a:contains("Edit")',
            run: "click",
        },
        {
            content: "Edit  billing address which is shipping address too",
            trigger: 'a.js_edit_address',
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: "Empty the phone field",
            trigger: 'input[name="phone"]',
<<<<<<< HEAD
            run: () => {
                document.querySelector('input[name="phone"]').value = "";
            },
        },
        {
            content: "Save address",
            trigger: 'a.a-submit',
=======
            run: "clear",
        },
        {
            content: "Save address",
            trigger: 'button#save_address',
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
            run: "click",
        },
        {
            content: "Check there is a warning for required field.",
<<<<<<< HEAD
            trigger: 'h5.text-danger:contains("Some required fields are empty.")',
            run: () => {},
=======
            trigger: ':invalid',
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    ],
});
