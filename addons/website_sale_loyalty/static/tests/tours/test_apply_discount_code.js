/** @odoo-module **/

import { registry } from "@web/core/registry";
<<<<<<< HEAD
import tourUtils from '@website_sale/js/tours/tour_utils';

registry.category("web_tour.tours").add('apply_discount_code_program_multi_rewards', {
    test: true,
    url: '/shop?search=Super%20Chair',
    steps: () => [
        {
            content: 'select Super Chair',
            extra_trigger: '.oe_search_found',
            trigger: '.oe_product_cart a:contains("Super Chair")',
=======
import * as tourUtils from '@website_sale/js/tours/tour_utils';

registry.category("web_tour.tours").add('apply_discount_code_program_multi_rewards', {
    url: '/shop?search=Super%20Chair',
    checkDelay: 100,
    steps: () => [
        {
            trigger: ".oe_search_found",
        },
        {
            content: 'select Super Chair',
            trigger: '.oe_product_cart a:contains("Super Chair")',
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: 'Add Super Chair into cart',
            trigger: 'a:contains(Add to cart)',
<<<<<<< HEAD
        },
        tourUtils.goToCart(),
        {
            content: 'insert discount code',
            extra_trigger: 'form[name="coupon_code"]',
            trigger: 'form[name="coupon_code"] input[name="promo"]',
            run: 'text 12345'
=======
            run: "click",
        },
        tourUtils.goToCart(),
        {
            trigger: "h3:contains(order overview)",
        },
        {
            trigger: 'form[name="coupon_code"]',
        },
        {
            content: 'insert discount code',
            trigger: 'form[name="coupon_code"] input[name="promo"]',
            run: "edit 12345",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: 'validate the promo code',
            trigger: 'form[name="coupon_code"] .a-submit',
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: 'check reward',
            trigger: '.alert:contains("10% on Super Chair")',
<<<<<<< HEAD
            isCheck: true,
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: 'claim reward',
            trigger: '.alert:contains("10% on Super Chair") .btn:contains("Claim")',
<<<<<<< HEAD
        },
        {
            content: 'check claimed reward',
            trigger: 'div>strong:contains("10% on Super Chair")',
            isCheck: true,
        },
        // Try to reapply the same promo code
        {
            content: 'insert discount code',
            extra_trigger: 'form[name="coupon_code"]',
            trigger: 'form[name="coupon_code"] input[name="promo"]',
            run: 'text 12345'
=======
            run: "click",
        },
        {
            content: "check claimed reward",
            trigger:
                "#cart_products.js_cart_lines .o_cart_product strong:contains(10% on Super Chair)",
        },
        // Try to reapply the same promo code
        {
            trigger: 'form[name="coupon_code"]',
        },
        {
            content: 'insert discount code',
            trigger: 'form[name="coupon_code"] input[name="promo"]',
            run: "edit 12345",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: 'validate the promo code',
            trigger: 'form[name="coupon_code"] .a-submit',
<<<<<<< HEAD
=======
            run: "click",
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
        {
            content: 'check refused message',
            trigger: '.alert-danger:contains("This promo code is already applied")',
<<<<<<< HEAD
            isCheck: true,
=======
>>>>>>> 06627dce7193576dd948aba13dceb28c33506fc8
        },
    ],
});
